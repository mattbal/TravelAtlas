# TravelAtlas

## Contributors

Gabriel Byram, Lovee Baccus, Morgan Baccus, Matthew Balint, Shira Feinberg, and Tom Arad

## Project Description
This project was completed as part of our CS 322 class at Washington State University. The class focused on the software development process and covered various topics like how to create Use-Case Diagrams and the pros and cons of different Process Models like Agile vs Waterfall. While learning this material, we were also tasked with planning out our own software program. As we'll explain below, we chose to create a Travel App.

Since the emphasis of the course was on the software development process, we were only given three weeks at the end of the semester to code our program and turn it into reality. As a result, the app isn't completely finished, but a rough prototype has been completed and a Python script has been made to scrape flight and hotel data from bing.com

## Mission Statement

We plan to develop a mobile application that provides users with vacation recommendations based on their preferences for price, weather and activities. By collecting this data, we can query a database of different vacation options and return a list that best matches the user’s criteria. As a result, our application will significantly reduce the time and stress it takes to plan a vacation.

To build this application, we will use a cross platform language that supports both Android and iOS, create a database of different vacation options, and pull in airfare and hotel cost data from the Internet.

## Run the app

TODO: Add more info to this section once we finish the app. When the app is done, we will do a production build in react-native that will compile all the code into just a few files.

## Setup for Development

If you want to perform development work on the app, follow these steps.

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

You can also run the app on your phone by downloading the "Expo Go" app from the app store and then scanning with your phone's camera the QR code shown when you run `expo start`

#### 2. Run scripts
You can also manually run a specific emulator by running one of the following `package.json` scripts.
```
npm run android
npm run ios
npm run web // this is the same as using expo start and opening a web emulator.
```
Running an Android or iOS emulator this way will be slower than using Expo Cloud since your computer has to compile all the code. 

### Common Issues
If you get an error when trying to the run an Android emulator, try opening the emulator manually first by going into Android Studio. Then run Expo Cloud or one of the Package.json scripts.
