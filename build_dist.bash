#! /bin/bash

clear

echo "building distribution directory"

grunt build

wait

rm -rf www
cp -rf dist www
cordova run android



echo 'Completed building distribution folder'
