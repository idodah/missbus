from fetch_data import FetchData
from database import Database
import pandas as pd
import schedule
import time
from datetime import datetime

def job(database):
    """
    This function performs a series of tasks including fetching GTFS data, updating the Firestore database, and scheduling
    the task to run periodically.
    Parameters:
        database (Database): An instance of the Database class to interact with Firestore.
    """
    try:
        print('started')
        fetchData = FetchData()
        res = fetchData.execute()
        database.delete_stations()
        database.upload_stations(res)
        database.upload_bus_lines(res)
        print(datetime.now())
        print('done')
    except(Exception):
        print('exception')



if __name__ == '__main__':
    # Create an instance of the Database class to interact with Firestore
    database = Database()

    # Perform the job once on startup
    job(database)

    # Schedule the job to run every day at 00:01
    schedule.every().day.at("00:01").do(lambda: job(database))

    # Keep the script running to execute the scheduled job
    while True:
        schedule.run_pending()
        time.sleep(60)
