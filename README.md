p20_context_sensing
===================

0. If you are on a Mac, install the [https://developer.apple.com/xcode/](XCode Developer Tools)
1. Clone this repo
2. Install Ruby on Rails
3. Install the compass gem: `gem install compass`
4. Install node.js from the nodejs.org website
5. Run `npm update` from the project folder
6. Install the yeoman generator for angular: `npm install -g generator-angular`
7. Run `grunt serve` to run the app
8. Run `grunt build` to build a minified distribution version of the application
9. Install cordova if you want to use this as a mobile phone application `npm install -g cordova`, then `cordova platform add android`
10. To turn the distribution version into an application, copy the contents of the dist folder into the www folder and then run `cordova run android`, this will generate an APK and attempt to install the application on a mobile device plugged in, or will start an emulator onto which it will install the application
