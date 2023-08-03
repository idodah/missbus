

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


class Database:
    def __init__(self):
        """
        Initializes the Database object, connecting to the Firestore database using the service account credentials.
        """
        cred = credentials.Certificate("C:/developer/service_account.json")
        firebase_admin.initialize_app(cred)
        self.db = firestore.client()

    def delete_stations(self):
        """
        Deletes all documents from the 'stations' collection in Firestore.
        """
        db = firestore.client()
        coll_ref = db.collection(u'stations')
        docs = coll_ref.list_documents(page_size=50)
        deleted = 0

        for doc in docs:
            print(f'Deleting doc {doc.id} => {doc.get().to_dict()}')
            doc.delete()
            deleted = deleted + 1

        if deleted >= 50:
            return self.delete_collection()

    def upload_stations(self, df_station):
        """
        Uploads station data to the 'stations' collection in Firestore.
        Parameters:
            df_station (pandas.DataFrame): DataFrame containing station data.
        """
        db = firestore.client()
        stations_data = df_station[['stop_code', 'stop_name']]
        stations_data = stations_data.drop_duplicates()
        for _, row in stations_data.iterrows():
            doc_ref = db.collection(u'stations').document(f'{row["stop_code"]}')
            doc_ref.set({
                u'station_name': row['stop_name'],
                u'station_id': row['stop_code'],
            })

    def upload_bus_lines(self, df_station):
        """
        Uploads bus line data to the 'stations/lines' collection in Firestore.
        Parameters:
            df_station (pandas.DataFrame): DataFrame containing station and bus line data.
        """
        db = firestore.client()
        stations = df_station['stop_code'].unique()
        for station in stations:
            data = df_station[df_station['stop_code'] == station]
            line_data = data[['line_number', 'agency_name']]
            line_data = line_data.drop_duplicates()
            for _, row in line_data.iterrows():
                arrival_times = df_station[(df_station['line_number'] == row['line_number']) & (df_station['stop_code'] == station)]
                doc_ref = db.collection('stations').document(f'{station}').collection(f'lines').document(f'{row["line_number"]}')
                doc_ref.set({
                    u'line_agency': row['agency_name'],
                    u'line_id': row['line_number'],
                    u'arrival_times': list(arrival_times['arrival_time'])
                })


