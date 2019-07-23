# Team Vibes
## Contributors: Chloie Parsons, Felipe Delatorre, Tia Rose

## How to install the app

* Git clone [TeamVibes](https://github.com/401-advanced-javascript-felipe/context-react-native-app)
* `npm i`
* `npm start` or `expo start`
    * Once everything loads, you will be prompted that your app is running on localhost: 19002. It will either automatically open a new window or you can type https://localhost:19002 in your browser
    * Right about the QR code set your connection from LAN to Tunnel

* Install Expo Client from:
    * App store if using an Iphone
    * Play Store if using Android


* Scan the QR code
    * If using an iPhone: use the camera app to scan the code and it will prompt you to open via Expo app
    * If using an Android: use the expo app to scan the code


## In the app

* Type your name in the field and click `Do you want to play a game` button
* This will navigate you to another page where you can press various buttons that will have different vibration patterns

## Dependencies
* React Native
* React 
* React Navigation
* Expo
* Babel-preset-expo
* React-dom
* React-native-web


## File structure
```
├── package.json
├── package-lock.json
├── babel.config.json
├── app.json
├── README.md
├── app.js
├── node_modules
├── assets
|   ├──icon.png
|   ├──splash.png
├── expo
|   ├──packager-info.json
|   ├──settings.json
└── components
|   └──context
|       ├──vibesContext.js
|   └──features
|       ├──vibesButton.js
|   └──screens
|       ├──AppNavigator.js
|       ├──homeScreen.js
|       ├──vibesScreen.js
```


# Happy Pressing!!
