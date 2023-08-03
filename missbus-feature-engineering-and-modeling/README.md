# MissBus- Feature Engineering & Modeling
Repository Contents:

## Data Preprocessing and Feature Engineering:

In this part, we merge the collected complaints data with various other features, including meteorological data, line-specific features (e.g., the number of stations, line length in km, average daily number of passengers), station-specific features (e.g., average daily number of passengers waiting at each station, average speed near each station), and temporal features related to the time of the complaints (e.g., day of the week, whether the complaint was submitted on a holiday).

## Model Evaluation:

In this notebook, we apply three different models—Decision Tree, Random Forest, and XGBoost—to the data we collected, including the negative sampling we added manually. We evaluate these models using four key metrics: Accuracy, Recall, Precision, and F1-score. For the accuracy metric we took only a subset of the data we had in order to train our model on a balanced dataset(we deleted only negative samples).


### Features Used to Train Our Model:
* busLine: The bus line number on which a complaint was filed.
* stationId: The station number where the complaint was filed.
* operator: The operator of the complained bus line.
* hour: The hour when the complaint was filed.
* weekDay: The day of the week when the complaint was filed.
* isJewishHoliday: A binary indicator of whether the complaint was filed on a Jewish holiday.
* accessible: A binary indicator of whether the complained bus line is accessible to people with disabilities.
* numberOfStations: The number of stations of the complained bus line.
* routeLength (km): The route length of the complained bus line in kilometers.
* lineWeeklyDrives: The number of weekly drives for the complained bus line.
* dailyNumberOfPassengersAtStation: The average daily number of passengers boarding buses at the complaint station (can indicate station crowding).
* dailyNumberOfStopsAtStation: The average daily number of buses stopping at the complaint station (can indicate station crowding).
* dailyNumberOfLinesAtStation: The average daily number of different bus lines stopping at the complaint station (number of unique lines stopping).
* passengersNumberSum: The total passengers who boarded the same bus line, at the same station, after the complaint was filed (can indicate if a bus didn't stop).
* temperature (Celsius degrees): The temperature at the time of the complaint.
* relativeHumidity (%): The relative humidity at the time of the complaint.
* windSpeed (m/s): The wind speed at the time of the complaint.
* rainfall (mm): The amount of rainfall at the time of the complaint.




