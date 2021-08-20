[![CodeFactor](https://www.codefactor.io/repository/github/awaisah/emma-app-test/badge)](https://www.codefactor.io/repository/github/awaisah/emma-app-test)

# Emma App Test
Emma App Test done as part of the interview process for Emma App.

## Installation via command line
### Step 1 - Clone Git Repo
```git clone https://github.com/awaisah/Emma-App-Test.git```
### Step 2 - Enter Project Directory
```cd Emma-App-Test```
### Step 3 - Install Node Packages
```npm install```
### Step 4 - Install Pod Dependencies
```cd ios && pod install```
### Step 5 - Return To Project Root Directory
```cd ..```
### Step 6 - Run on iOS
```npx react-native run-ios```
### Step 7 - Run on Android
```npx react-native run-android```

## Project Overview
The main aim of this project is to develop a well tested application which resembles the following video:

![Video Demonstration Of Requirements](https://user-images.githubusercontent.com/19827912/129479976-cb113001-2f96-4f1b-be0c-f1ffdfefe702.gif)

This is a simple single screen application which loads a local .json file containing details of each of the contacts.

## Assumptions

* The details scrollview is not scrollable. It would be nice to have this scrollable and also select the current contact's profile picture as further improvements
