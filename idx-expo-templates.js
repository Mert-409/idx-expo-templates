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
    console.log('.idx klasörü taşınıyor...');
    fs.copySync(source, destination);
  } else {
    console.log('.idx klasörü bulunamadı.');
  }
}

function deleteCurrentProject() {
  console.log('Mevcut projeyi siliyorum...');
  fs.removeSync(path.resolve(projectName));
}

function createExpoApp() {
  console.log('Yeni Expo projesi oluşturuluyor...');
  execSync(`npx create-expo-app ${projectName} --template blank --yes`, { stdio: 'inherit' });
}

function runAndroid() {
  console.log('Android emülatörü başlatılıyor...');
  execSync(`cd ${projectName} && npx expo run:android`, { stdio: 'inherit' });
}

function main() {
  deleteCurrentProject();
  createExpoApp();
  moveIdxFolder();
  runAndroid();
}

main();
