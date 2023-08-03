from pilot_data import PilotData
from transport_authority_data import TransportAuthorityData
import pandas as pd
import new_features
import datetime

def data_preprocessing():
    """
    Merges complaints from our pilot and complaints from the transportation authority into a single DataFrame.
    Adds new features to the merged DataFrame based on date and time columns.
    Writes the final DataFrame to an Excel file 'complaints_df.xlsx'.
    """
    pilot = PilotData()
    authority = TransportAuthorityData()
    merged_df = pd.concat([pilot.get_final_dataframe(), authority.get_final_dataframe()])

    merged_df['isJewishHoliday'] = merged_df['busTime'].apply(new_features.check_if_day_is_holiday)
    merged_df['weekDay'] = merged_df['busTime'].apply(new_features.check_if_day_in_weekend)
    merged_df['hour']=merged_df['busTime'].apply(new_features.get_hour)

    merged_df['rounded_datetime'] = merged_df['busTime'].dt.round('10min')
    df = pd.merge(merged_df, new_features.get_meteorological_data(), left_on='rounded_datetime', right_on='Date & Time (Summer)', how='left')

    df = new_features.get_tiltan_data(df)

    df=df.drop(['complainDate','rounded_datetime', 'Station','Date & Time (Summer)'],axis=1)
    df=df.rename(columns={'Temperature (°C)':'temperature (°C)','Wind speed (m/s)':'windSpeed (m/s)','Rainfall (mm)':'rainfall (mm)',
                          'route length':'routeLength','number of stations':'numberOfStations','weekly drives':'lineWeeklyDrives',
                          'number of lines stopping at station':'dailyNumberOfLinesAtStation','daily number of passengers at station':
                          'dailyNumberOfPassengersAtStation','daily number of stops at station':'dailyNumberOfStopsAtStation'})

    # Add passengersNumberSum feature
    df=add_passengers_number_sum(df)

    # Save the merged DataFrame to Excel
    df.to_excel('complaints_df.xlsx', index=False)

def add_passengers_number_sum(df):
    """
    Add passengersNumberSum feature(The total passengers who boarded the same bus line,
    at the same station, after the complaint was filed- can indicate if a bus didn't stop)
    """
    # read the data from rav kav that includes information about number of bus boardings for lines, stations, dates, and times
    rav_kav_df = pd.read_csv('rav kav data.csv')

    # transform the date columns
    rav_kav_df['TransactionDate'] = pd.to_datetime(rav_kav_df['TransactionDate'], format='%Y/%m/%d')
    rav_kav_df['transactionDateTime'] = pd.to_datetime(rav_kav_df['TransactionDate'].dt.strftime('%Y-%m-%d') + ' ' + 
                                                       rav_kav_df['TransactionTime'].astype(str))
    
    df['busDateTime'] = pd.to_datetime(df['busTime'].dt.strftime('%Y-%m-%d %H:%M'))

    # fill the passengersNumberSum column
    for i, row in df.iterrows():
        current_date = row['busDateTime'].date()
        if current_date >= datetime.date(2023, 2, 22):
            later_rows = rav_kav_df[rav_kav_df['transactionDateTime'].dt.date == current_date]
            if later_rows.empty:
                later_rows = later_rows[later_rows['transactionDateTime'].dt.date > row['busDateTime'].date()]
            if not later_rows.empty:
                closest_datetime = later_rows.iloc[0]['transactionDateTime'].date()

                filtered_df = rav_kav_df[rav_kav_df['transactionDateTime'].dt.date == closest_datetime]
                val = filtered_df['PassengersNumber_sum'].iloc[0]
                df.at[i, 'passengersNumberSum'] = val
            else:
                df.at[i, 'passengersNumberSum'] = None

    df = df.drop(['מקט','busDateTime'], axis=1)
    return df

if __name__ == '__main__':
    data_preprocessing()
