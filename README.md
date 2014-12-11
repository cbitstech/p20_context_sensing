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
8. Run `grunt build` to make a buildable version of the application (it will generate to the build foldr)
9. Use the cordovd command line interface to make an API: http://docs.phonegap.com/en/3.5.0/guide_cli_index.md.html

Want to make this into a mobile app? From your app's folder:
------------------------------------
`sudo npm install -g cordova`
`cordova create www edu.northwestern.p20 P20`
move the contents of the grunt build dist folder into the www folder withing
`cordova platform add android`
`cordova build` to make an app
`cordova run` to run the app in an emulator
 
