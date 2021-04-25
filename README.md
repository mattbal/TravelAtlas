# TravelAtlas
A project for CS 322 at Washington State University.

## Contributors

Gabriel Byram, Lovee Baccus, Morgan Baccus, Matthew Balint, Shira Feinberg, and Tom Arad

## Project Description

We plan to develop a mobile application that provides users with vacation recommendations based on their preferences for price, weather and activities. By collecting this data, we can query a database of different vacation options and return a list that best matches the user’s criteria. As a result, our application will significantly reduce the time and stress it takes to plan a vacation.

To build this application, we will use a cross platform language that supports both Android and iOS, create a database of different vacation options, and pull in airfare and hotel cost data from the Internet.

## Setup for Development

### Prerequisites

- [NodeJS](https://nodejs.org/en/) is installed
- [Android Studio](https://developer.android.com/studio/) is installed and the Android [emulator is setup](https://docs.expo.io/workflow/android-studio-emulator/)
- If you want to run the app in an iOS simulator, you need to have a mac. (You can get around this by running the app on an iPhone if you have one)

### Setup

To setup TravelAtlas for development, clone the github repo and then run:

```
cd TravelAtlas   // Navigate into the TravelAtlas folder
cd TravelAtlas   // Navigate into the app folder
npm install      // install node modules. This only needs to be run once when you first install the project
```
There are two ways you can run the app:

#### 1. Expo Cloud
Each time you want to run the app, run
```
expo start
```
and press a, i, or w to open the app in an Android, iOS or Web emulator. Expo will build the app's binaries in the cloud and load it into whichever emulator you chose. For slow computers, this will make running an Android or iOS emulator much faster since Expo's cloud servers are compiling the app for you.

You can also run the app on your phone by downloading the "Expo Go" app from the app store and then scanning with your phone's camera the QR code shown when you run `expo start.`

#### 2. Run scripts
You can also manually run a specific emulator by running one of the following npm run scripts.
```
npm run android
npm run ios
npm run web
```
With the exception of web, this will be slower than using Expo Cloud.

### Common Issues
If you get an error when trying to the run an Android emulator, try opening the emulator manually by going into Android Studio and then try opening the emulator through expo or npm run android.
