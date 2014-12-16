p20_context_sensing
===================

0. If you are on a Mac, install the [https://developer.apple.com/xcode/](XCode Developer Tools)
1. Clone this repo
2. Install Ruby on Rails
3. Install the compass gem: `gem install compass`
4. Install node.js from the nodejs.org website
5. Run `npm update` from the project folder
6. Install grunt, grunt command line interface, yeoman, cordova and the yeoman generator for angular: `sudo npm install -g grunt grunt-cli yo generator-angular`
7. Run `npm install` and `bower install` to make sure that all dependencies are hooked up
8. Run `grunt serve` to run the app Run `grunt build` to build a minified distribution version of the application
9. Install cordova if you want to use this as an Android mobile phone application `cordova platform add android`
10. To turn the distribution version into an application, copy the contents of the `dist` folder into the `www` folder and then run `cordova build`, alternatively running `cordova run android` will install the application on a mobile device plugged in, or will start an emulator onto which it will install the application (this could be automated using a bash script that runs `grunt build` then copies the contents from the dist folder into the www folder then runs the builder) 
11. The file will be built by either process into `/platforms/android/ant-build/{something}unaligned.apk`

If you have questions about the build process for cordova, take a look at: http://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html
