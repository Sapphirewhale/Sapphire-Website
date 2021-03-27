#!/usr/bin/env sh

echo 'Changing directories'
cd sapphire-website

echo 'Building the app'
npm run build

echo 'Serving the app on port 4000'
#serve -s build -l 4000