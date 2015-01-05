#! /bin/bash

clear

echo "building distribution directory"

grunt build

wait

rm -rf www
cp -rf dist www
cp app/styles/bootstrap.min.css www/styles
mkdir www/vendor
cp -rf app/vendor www
cordova run android



echo 'Completed building distribution folder'
