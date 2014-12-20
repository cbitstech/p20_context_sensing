#! /bin/bash

clear

echo "building distribution directory"

grunt build

wait


cp dist/* www/*



echo 'Completed building distribution folder'
