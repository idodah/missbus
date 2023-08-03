## Project Overview
This project is designed to deliver a fast and easy way for users to complain on problems with buses. The point of this project is to store only relevant complaints and avoid spam

## How it works
To reduce spam and bad complaints, we prevent people from complain about buses that are not at their bus stops. To do that, we remove the path `/home` from the app paths until the user does not have the relevant data. To open the app correctly, the user first needs to scan a barcode from the bus station. The barcode navigates to the following path: `station/stationID` which downloads all the relevant data for the specific station, and then it navigates to `/home` which is already in the paths.

Project stack: Reactjs, Redux, Firebase

Folder Architecture:
- components: Reusable components for all pages
- services: Communication with external tools (such as database)
- hooks: Custom hooks
- store: Redux state management
- views: Pages of the app

To start the project, clone it to your machine, run `npm install`, and then `npm start`.
