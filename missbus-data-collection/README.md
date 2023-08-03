This project is designed to fetch the data about bus lines and upload it to a firebase server.

## How it works
Our data was collected from the gtfs(General Transit Feed Specification) files from the website of the transportation authority of Israel. The data includes many tables with information about bus lines and the bus stops. We created from this data a new dataset that every row in it represents a stop of bus line in a certain bus station at a certain time. We focused on 11 bus stations that on each of them we saved the time each bus line suppose to stop at them, the bus line number, the full name of the station, the bus station number and the agency of the bus line.

Every day at midnight we download a zip file that contains the gtfs files, process our data again, create a new dataset from it and upload the new dataset to our firebase server, ensuring that passengers receive the most up-to-date information about their bus lines.

Project stack: Python
