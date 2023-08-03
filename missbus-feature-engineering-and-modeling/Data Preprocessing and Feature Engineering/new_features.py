from pyluach import dates
import pandas as pd

def check_if_day_is_holiday(dt):
    """
    Returns if the day of the complaint was a jewish holiday
    Parameters:
        dt- The datetime of the complaint
    """
    return dates.GregorianDate(dt.year,dt.month,dt.day).holiday()!=None
    
def get_day_in_week(dt):
    """
    Returns the day in the week of the complaint
    Parameters:
        dt- The datetime of the complaint
    """
    if(dt.weekday()==6):
      return 0
    else:
      return dt.weekday()+1

def get_hour(dt):
   if dt.minute>30:
      return dt.hour+1
   else:
      return dt.hour
    
def get_meteorological_data():
    """
    Concat meteorological features that were downloaded from the israeli meteorological website
    (the station that measured meteorological data has been replaced so there are 2 different csv files-
    one for the complaints of 2022 and one for the complaints of 2023).
    Returns a DataFrame containing concatenated meteorological features.
    """
    meteorological_df1=pd.read_csv('old meteorological data.csv')
    meteorological_df2=pd.read_csv('new meteorological data.csv')

    meteorological_df1['Date & Time (Summer)']=pd.to_datetime(meteorological_df1['Date & Time (Summer)'], dayfirst=True, format='%d/%m/%Y %H:%M')
    meteorological_df2['Date & Time (Summer)']=pd.to_datetime(meteorological_df2['Date & Time (Summer)'], dayfirst=True, format='%d/%m/%Y %H:%M')


    frames = [meteorological_df1,meteorological_df2]
    
    merged_meteorological_df = pd.concat(frames)
    return merged_meteorological_df

def get_tiltan_data(df):
    """
    Adds features about lines and stations obtained from Tiltan (Public Transportation Authority system) to the DataFrame.
    Parameters:
        df (pd.DataFrame): The DataFrame containing the complaints.
    Returns the updated DataFrame with additional features from Tiltan data.
    """
    lines=pd.read_csv('lines.csv')
    stations=pd.read_csv('stations.csv')
    lines=lines.loc[lines['חלופה'].isin(['0','#'])]
    lines=lines.loc[lines['כיוון'] == 1]
    lines=lines[['קו', 'מפעיל', 'אורך','נגיש','מספר תחנות','יציאות שבועיות','מקט']]

    stations=stations[['מק""ט','כמות קווים עוצרים','תיקופים יומי','עצירות יומי']]

    df['busLine'] = df['busLine'].astype(int)
    stations['מק""ט']=stations['מק""ט'].astype(object)

    df = pd.merge(df, lines, left_on='busLine',right_on='קו', how='left')
    df=pd.merge(df, stations, left_on='stationId',right_on='מק""ט', how='left')
    df=df.rename(columns={'מפעיל': 'operator','אורך':'route length','נגיש':'accesible','מספר תחנות':'number of stations',
                          'יציאות שבועיות':'weekly drives','כמות קווים עוצרים':'number of lines stopping at station',
                          'תיקופים יומי':'daily number of passengers at station','עצירות יומי':'daily number of stops at station'})
    df=df.drop(['קו', 'מק""ט'], axis=1)
    return df

