#!/bin/sh
set -ea

cd /usr/src/gatsby-app

if [ ! -d "node_modules" ]
then
    npm install
fi

npm run develop
