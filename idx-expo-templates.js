// Bash script is recommended.

// Before using run npm install fs-extra

#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

// Proje ismini al
const projectName = process.argv[2] || 'rn-proje';

function moveIdxFolder() {
  const homeDir = process.env.HOME || process.env.USERPROFILE;
  const source = path.join(homeDir, '.idx');
  const destination = path.resolve(projectName, '.idx');

  if (fs.existsSync(source)) {
    console.log('Moving .idx folder...');
    fs.copySync(source, destination);
  } else {
    console.log('Can't found .idx folder.');
  }
}

function deleteCurrentProject() {
  console.log('Deleting old project...');
  fs.removeSync(path.resolve(projectName));
}

function createExpoApp() {
  console.log('Creating new Expo project...');
  execSync(`npx create-expo-app ${projectName} --template blank --yes`, { stdio: 'inherit' });
}

function runAndroid() {
  console.log('Starting Android emulator...');
  execSync(`cd ${projectName} && npm run android`, { stdio: 'inherit' });
}

function main() {
  moveIdxFolder(); 
  deleteCurrentProject();
  createExpoApp();

  runAndroid();
}

main();
