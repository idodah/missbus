import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import pandas as pd
from datetime import datetime


class PilotData:
    def __init__(self):
        """
        Constructor to initialize the PilotData class.
        Sets up the Firebase Firestore connection using credentials from a JSON file.
        """
        cred = credentials.Certificate("missbus-a70db-firebase-adminsdk-rkgfl-5403d81dce.json")
        app = firebase_admin.initialize_app(cred)
        self.db= firestore.client()


    def create_pilot_dataframe(self):
        """
        Creates a DataFrame from the complaints collected in Firebase Firestore.
        """
        col_ref = self.db.collection(u'complaints')

        docs = col_ref.get()
        pilot_data = {}
        for doc in docs:
            pilot_data[doc.id] = doc.to_dict()

        self.df= pd.DataFrame.from_dict(list(pilot_data.values()))
    

    def remove_duplicates(self):
        """
        Removes duplicate complaints and drops private information columns from the DataFrame.
        """
        self.df.drop(['phoneNumber', 'fullName'], axis=1)
        self.df=self.df.sort_values('busTime').drop_duplicates(subset=['busLine', 'complainId','fullName', 'stationId','busTime'], keep='last')


    def filter_complaints_by_date(self):
        """
        Filters complaints to keep only those filed after the date the pilot started (22/02/2023).
        """
        complainDate = list(self.df["complainDate"])

        complainDate_datetime = []

        for comp in complainDate:
            dt = comp.tz_convert('Israel')
            complainDate_datetime.append(datetime(dt.year, dt.month, dt.day, dt.hour, dt.minute))

        self.df["complainDate"] = complainDate_datetime
        # get only complaints that filed after the date we started the pilot
        self.df["complainDateTime"] = [datetime(comp.year, comp.month, comp.day, comp.hour, comp.minute) for comp in complainDate]
        starting_pilot = datetime(2023, 2, 22, 9, 30)
        self.df = self.df[self.df["complainDateTime"] >= starting_pilot]
    
    def change_datetime_format(self):
        """
        Changes the date format of 'busTime' and 'complainDate' columns in the DataFrame.
        """
        complainDate = list(self.df["complainDate"])
        complainDate_str = []

        for comp in complainDate:
            comp_str = comp.strftime("%Y-%m-%d %H:%M:%S")
            complainDate_str.append(comp_str)

        busTime = list(self.df["busTime"])
        busTime_str = []

        for bus in busTime:
            bus_str = bus.strftime("%Y-%m-%d %H:%M:%S")
            busTime_str.append(bus_str)


        self.df.drop(["busTime"],axis=1)
        self.df["busTime"] = busTime_str
        self.df["complainDate"] = complainDate_str
    
    def get_final_dataframe(self):
        """
        A function that calls every method in this class, keeps only the relevant columns,
        and returns the DataFrame of the complaints collected during the pilot.
        Returns:
            pd.DataFrame: The final DataFrame containing relevant columns from the pilot complaints data.
        """
        self.create_pilot_dataframe()
        self.remove_duplicates()
        self.filter_complaints_by_date()
        self.change_datetime_format()
        self.df=self.df[['busLine','busTime','complainId','complainDate','stationId']]
        self.df['busTime']=pd.to_datetime(self.df['busTime'])
        return self.df




    
    
    

        

