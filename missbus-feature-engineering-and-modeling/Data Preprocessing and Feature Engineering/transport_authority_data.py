import pandas as pd


class TransportAuthorityData():
    """
    A class representing transportation authority complaints data.
    """
    
    def __init__(self):
        # read the csv that contains all the complaints collected by transportation authority
        transportation_authority_data = pd.read_csv("panatz_clean_noStop_bs_SepNov.csv")

        # keep only the relevent features
        relevent_features = ["ticketnumber", "title", "new_caseessence", "new_event_date", "new_officelineid", "new_operatorid", "new_clustername", "new_line_length", "new_line_station_id"]
        self.transportation_authority_data=transportation_authority_data[relevent_features]


    def extract_features(self):
        # Delete duplicate complaints
        relevant_transportation_authority_data = self.transportation_authority_data.loc[self.transportation_authority_data.duplicated(subset=['title']) == False]

        # Remove index
        relevant_transportation_authority_data = relevant_transportation_authority_data.reset_index(drop=True)

        # extract the bus line from the free text
        titles = list(relevant_transportation_authority_data["title"])
        buslines = [title.split("קו ")[1].lstrip().split(" ")[0] for title in titles]
        relevant_transportation_authority_data["buslines"] = buslines

        # define the complaint category for each complaint
        relevant_transportation_authority_data['label']='אוטובוס הגיע ולא עצר'
        relevant_transportation_authority_data.loc[3,'label']='אוטובוס לא הגיע'

        return relevant_transportation_authority_data
    
    def get_final_dataframe(self):
        """
        Obtains the final DataFrame with relevant features for transportation authority complaints.
        """
        df=self.extract_features()
        df=df.rename(columns={'buslines': 'busLine','new_event_date':'busTime','label':'complainId'})
        df=df[['busLine','busTime','complainId']]
        df['stationId']=None
        df['busTime']=pd.to_datetime(df['busTime'])
        return df
