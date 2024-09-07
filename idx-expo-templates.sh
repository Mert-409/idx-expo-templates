#!/bin/bash

PROJECT_NAME=${1:-rn-proje}

echo "Moving .idx folder..."
if [ -d "$HOME/.idx" ];
  echo ".idx folder moved."
fi

echo "Deleting old project..."
rm -rf $PROJECT_NAME

echo "Creating new Expo project..."
npx create-expo-app $PROJECT_NAME --template blank
# You can edit template here.

mv $HOME/.idx $PROJECT_NAME/

echo "Starting Android emulator..."
cd $PROJECT_NAME
npm run android

