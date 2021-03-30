#!/usr/bin/env sh

echo 'Changing directories'
cd sapphire-website

echo 'Installing the app'
npm install --unsafe-perm=true --allow-root

echo 'Building the app'
npm run build --unsafe-perm=true --allow-root

echo 'Serving the app on port 4000'
chmod +x -R /usr/local/lib/node_modules
npm install -g serve
serve -s build -l 4000