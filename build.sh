#!/bin/bash

# pull latest code
sudo git pull --no-edit

#npm install
sudo npm install

# create bulid
sudo npm run build

cp  -r build/* ../

#sudo cp src/.htaccess dist/iwillmessage-frontend


