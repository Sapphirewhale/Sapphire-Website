#!/usr/bin/env sh

echo 'Changing directories'
cd sapphire-website

echo 'Installing the app'
npm install --unsafe-perm=true --allow-root

echo 'Building the app'
npm run build --unsafe-perm=true --allow-root

echo 'Serving the app on port 4000'
serve -s build -l 4000