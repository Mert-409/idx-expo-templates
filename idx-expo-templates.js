// Before using run npm install fs-extra

#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const projectName = process.argv[2] || 'rn-proje';

const homeDir = process.env.HOME || process.env.USERPROFILE;
const idxPath = path.join(homeDir, '.idx');

function moveIdxToHome(projectDir) {
  const projectIdxPath = path.join(projectDir, '.idx');
  
  if (fs.existsSync(projectIdxPath)) {
    console.log('.idx klasörü home/user dizinine taşınıyor...');
    fs.moveSync(projectIdxPath, idxPath, { overwrite: true });
  } else {
    console.log('.idx klasörü proje dizininde bulunamadı.');
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

function moveIdxToNewProject() {
  const newProjectIdxPath = path.resolve(projectName, '.idx');

  if (fs.existsSync(idxPath)) {
    console.log('.idx klasörü yeni projeye taşınıyor...');
    fs.moveSync(idxPath, newProjectIdxPath, { overwrite: true });
  } else {
    console.log('home/user dizininde .idx klasörü bulunamadı.');
  }
}

function runAndroid() {
  console.log('Android emülatörü başlatılıyor...');
  execSync(`cd ${projectName} && npx expo run:android`, { stdio: 'inherit' });
}

function main() {
  const projectDir = path.resolve(projectName);
  
  moveIdxToHome(projectDir);   // 1. Adım: .idx'i home/user'a taşı
  deleteCurrentProject();      // 2. Adım: Eski projeyi sil
  createExpoApp();             // 3. Adım: Yeni proje oluştur
  moveIdxToNewProject();       // 4. Adım: .idx'i yeni projeye taşı
  runAndroid();                // 5. Adım: Android emülatörünü başlat
}

main();
