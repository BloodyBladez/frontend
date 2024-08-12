#!/bin/bash

if command -v yarn &> /dev/null
then
    echo "Yarn package manager found. Running command for Yarn..."
    yarn install && yarn build && yarn preview
elif command -v npm &> /dev/null
then
    echo "NPM package manager found. Running command for NPM..."
    npm install && npm run build && npm run preview
else
    echo "No supported package manager was found. Install Yarn or NPM to continue."
    exit 1
fi

if command -v xdg-open &> /dev/null
then
    xdg-open http://localhost:9051
elif command -v gnome-open &> /dev/null
then
    gnome-open http://localhost:9051
elif command -v open &> /dev/null
then
    open http://localhost:9051
else
    echo "The command to open the browser could not be determined."
fi