#!/bin/bash

PROJECT_NAME=${1:-rn-proje}

echo ".idx folder moving..."
if [ -d "$HOME/.idx" ]; then
  mv $HOME/.idx $PROJECT_NAME/
  echo ".idx folder moved."
  echo "Can't found .idx folder."
fi

echo "Deleting old project..."
rm -rf $PROJECT_NAME

echo "Creating new Expo project"
npx create-expo-app $PROJECT_NAME --template blank
# You can edit template here.

echo "Starting Android emulator..."
cd $PROJECT_NAME
npm run android

