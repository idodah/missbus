
import os
import pandas as pd
from datetime import datetime, timezone, timedelta
import urllib.request
import ssl
import shutil

import zipfile

class FetchData:
    def __init__(self):
        """
        Initializes the FetchData object.
        """
        ssl._create_default_https_context = ssl._create_unverified_context
        self.url = 'https://gtfs.mot.gov.il/gtfsfiles/israel-public-transportation.zip'
        self.DEFAULT_PATH = 'tmp/'
        if not os.path.exists(self.DEFAULT_PATH):
            os.makedirs(self.DEFAULT_PATH)

    def _download_data(self):
        """
        Downloads the GTFS zip files from the specified URL and extracts their contents to the default directory.
        """
        # req = requests.get(self.url,verify=False)
        urllib.request.urlretrieve(self.url, self.DEFAULT_PATH + 'israel-public-transportation.zip')
        zip_ref = zipfile.ZipFile(self.DEFAULT_PATH + 'israel-public-transportation.zip', 'r')
        zip_ref.extractall(self.DEFAULT_PATH) # Extract all the contents of the zip file
        # Close the zip file
        zip_ref.close()

    def _create_dataframes(self):
        """
        Creates Pandas DataFrames from the extracted GTFS files.
        """
        self.stop_times = pd.read_csv(self.DEFAULT_PATH + 'stop_times.txt', sep=',')
        self.trips = pd.read_csv(self.DEFAULT_PATH + 'trips.txt', sep=',')
        self.routes = pd.read_csv(self.DEFAULT_PATH + 'routes.txt', sep=',')
        self.calendar = pd.read_csv(self.DEFAULT_PATH + 'calendar.txt', sep=',')
        self.stops = pd.read_csv(self.DEFAULT_PATH + 'stops.txt', sep=',')
        self.agencies=pd.read_csv(self.DEFAULT_PATH + 'agency.txt', sep=',')
        self.missbus_stations = pd.read_excel('C:/developer/data/MISSBUS_stations.xlsx')

        # get only the columns we need
        self.stop_times = self.stop_times[['trip_id','arrival_time','stop_id','stop_sequence']]
        self.trips = self.trips[['route_id','service_id','trip_id']]
        self.routes = self.routes[['route_id','agency_id','route_short_name','route_long_name','route_desc']]
        self.stops = self.stops[['stop_id','stop_code','stop_name']]
        self.calendar = self.calendar[['service_id','sunday','monday','tuesday','wednesday','thursday','friday','saturday',
                        'start_date','end_date']]
    
    def _preprocess(self):
        """
        Preprocesses the data to filter and merge relevant information for further analysis.
        Returns:
            pandas.DataFrame: data frame containing information about bus stops, bus lines, and arrival times.
        """
        unique_station_id =self. missbus_stations['station_id'].unique()
        unique_bus_line = self.missbus_stations['bus_line'].unique()

        # filter our bus stations
        filtered_stop_ids = self.stops.loc[self.stops['stop_code'].isin(unique_station_id)]


        # get busses times
        filtered_stop_ids_times=pd.merge(self.stop_times, filtered_stop_ids,on='stop_id')


        # merge dataframes in order to get the arrival time of each bus
        trips_df=pd.merge(self.trips, filtered_stop_ids_times,on='trip_id')
        routes_df=pd.merge(trips_df, self.routes,on='route_id')
        agencies_df=pd.merge(routes_df, self.agencies,on='agency_id')
        lines_schedule_df=pd.merge(agencies_df, self.calendar,on='service_id')

        timezone_offset = 2.0  # Pacific Standard Time (UTC+02:00)
        tzinfo = timezone(timedelta(hours=timezone_offset))

        current_date=int(datetime.today().strftime('%Y%m%d'))
        current_day=datetime.now(tzinfo).strftime('%A').lower()
        
        # get only the active bus lines that works today
        filtered_bus_calendar=lines_schedule_df.loc[(current_date>= lines_schedule_df['start_date']) & 
                                            (current_date<=lines_schedule_df['end_date']) & 
                                            (lines_schedule_df[current_day]==1)]

        # agency_id: egged-3, metropolin- 15
        filtered_bus_calendar=filtered_bus_calendar[['stop_code','stop_name','agency_name','route_short_name','arrival_time']]
        filtered_bus_calendar.rename(columns = {'route_short_name':'line_number'}, inplace = True)
        filtered_bus_calendar=filtered_bus_calendar.sort_values(by=['stop_code','line_number','arrival_time'])
        
        # filtered_bus_calendar.to_csv('C:/Users/user/Desktop/project/bus_schedule.csv')
        return filtered_bus_calendar

    def delete_work(self):
        """
        Deletes the temporary directory containing the downloaded and extracted GTFS files.
        """
        shutil.rmtree(self.DEFAULT_PATH)

    def execute(self):
        """
        Executes the GTFS data processing pipeline.
        Returns:
            pandas.DataFrame: data frame containing information about bus stops, bus lines, and arrival times.
        """
        self._download_data()
        self._create_dataframes()
        result = self._preprocess()
        self.delete_work()
        return result
