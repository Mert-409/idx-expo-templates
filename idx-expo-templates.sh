#!/bin/bash

# Proje adını parametre olarak al, yoksa varsayılan olarak "rn-proje" kullan
PROJECT_NAME=${1:-rn-proje}

# Ana klasör yolu (kullanıcı dizini)
HOME_DIR=$HOME
IDX_PATH="$HOME_DIR/.idx"

# .idx klasörünü proje dizininden home/user dizinine taşı
move_idx_to_home() {
  PROJECT_DIR="$PWD/$PROJECT_NAME"
  PROJECT_IDX_PATH="$PROJECT_DIR/.idx"

  if [ -d "$PROJECT_IDX_PATH" ]; then
    echo ".idx klasörü home/user dizinine taşınıyor..."
    mv "$PROJECT_IDX_PATH" "$IDX_PATH"
  else
    echo ".idx klasörü proje dizininde bulunamadı."
  fi
}

# Mevcut RN proje klasörünü sil
delete_current_project() {
  if [ -d "$PROJECT_NAME" ]; then
    echo "Mevcut projeyi siliyorum..."
    rm -rf "$PROJECT_NAME"
  else
    echo "Silinecek proje bulunamadı."
  fi
}

# Yeni Expo projesi oluştur
create_expo_app() {
  echo "Yeni Expo projesi oluşturuluyor..."
  npx create-expo-app "$PROJECT_NAME" --template blank --yes
}

# .idx klasörünü yeni projeye taşı
move_idx_to_new_project() {
  NEW_PROJECT_IDX_PATH="$PWD/$PROJECT_NAME/.idx"

  if [ -d "$IDX_PATH" ]; then
    echo ".idx klasörü yeni projeye taşınıyor..."
    mv "$IDX_PATH" "$NEW_PROJECT_IDX_PATH"
  else
    echo "home/user dizininde .idx klasörü bulunamadı."
  fi
}

# Android emülatörünü başlat
run_android() {
  echo "Android emülatörü başlatılıyor..."
  cd "$PROJECT_NAME" && npm run android
}

# Ana işlem
main() {
  move_idx_to_home    # 1. Adım: .idx'i home/user'a taşı
  delete_current_project  # 2. Adım: Eski projeyi sil
  create_expo_app     # 3. Adım: Yeni proje oluştur
  move_idx_to_new_project  # 4. Adım: .idx'i yeni projeye taşı
  run_android         # 5. Adım: Android emülatörünü başlat
}

main
