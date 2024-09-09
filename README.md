# Project IDX React Native Expo Templates
**This script in development.**

Open this repo in IDX:
<a href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FMert-409%2Fidx-expo-templates%2F">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://cdn.idx.dev/btn/open_dark_32.svg">
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://cdn.idx.dev/btn/open_light_32.svg">
    <img
      height="32"
      alt="Open in IDX"
      src="https://cdn.idx.dev/btn/open_purple_32.svg">
  </picture>
</a>

----

<h3>TR</h3>

Project IDX kullanıyorsanız ve bir React Native projesi oluşturduğunuzda Expo'nun @latest template'i gelecektir.
Bu template her ne kadar iyi olsada karışık dosya yapısı sebebiyle yeni öğrenen kişilerin ismini zorlaştırıyor.

Bu script, IDX'te size blank template'ini kullanan bir Expo uygulaması oluşturacaktır.
Template değiştirmek isterseniz kodu düzenleyebilirsiniz.

**Nasıl kullanılır?**

_**Bash script'i**_ - Tavsiye edilir

Öncelikle <code>idx-expo-templates.sh</code> dosyasını indirin.

<p>Sonra <a href="https://idx.google.com/new/react-native">Project IDX'te React Native şablonuyla yeni bir proje oluşturun.</a></p>

Aşağıdaki butona basarak oluşturma ekranına gidebilirsiniz.

<a href="https://idx.google.com/new/react-native">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://cdn.idx.dev/btn/open_dark_32.svg">
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://cdn.idx.dev/btn/open_light_32.svg">
    <img
      height="32"
      alt="Open in IDX"
      src="https://cdn.idx.dev/btn/open_purple_32.svg">
  </picture>
</a>

Android emülatörü ve uygulamanız yanda gelene kadar bekleyin. Bu işlemleri yaparken Android emülatörünü asla kapatmayın.

Sonra IDX'te sağ üstteki 3 çizgiye tıklayın, File > Open folder kısmından home/user/ klasörüne gidin ve script'i o klasöre bırakın.

Sonra Ctrl+Shift+" tıklayarak yeni bir terminal açın.

<code>bash idx-expo-templates.sh proje-adi</code> komutunu çalıştırın. <code>proje-adi</code> bölümüne proje adını yazın. Yazmazsanız otomatik olarak <code>rn-proje_</code> adıyla oluşturulacaktır.

Eğer Expo yüklü değilse sizden yüklemenizi isteyecektir. <code>y</code> yazarak devam edebilirsiniz.

Script sizin için gereken işlemleri yapacak.

_**Node.js script'i**_

Öncelikle <code>idx-expo-templates.js</code> dosyasını indirin.

<p>Sonra <a href="https://idx.google.com/new/react-native">Project IDX'te React Native şablonuyla yeni bir proje oluşturun.</a></p>

Android emülatörü ve uygulamanız yanda gelene kadar bekleyin. Bu işlemleri yaparken Android emülatörünü asla kapatmayın.

Sonra IDX'te sol üstteki 3 çizgiye tıklayın, File > Open folder kısmından home/user/ klasörüne gidin ve script'i o klasöre bırakın.

Sonra Ctrl+Shift+" tıklayarak yeni bir terminal açın.

<code>npm install fs-extra</code> komutunu çalıştırın.

<code>bash idx-expo-templates.sh proje-adi</code> komutunu çalıştırın. <code>proje-adi</code> bölümüne proje adını yazın. Yazmazsanız otomatik olarak <code>rn-proje_</code> adıyla oluşturulacaktır.

Eğer Expo yüklü değilse sizden yüklemenizi isteyecektir. <code>y</code> yazarak devam edebilirsiniz.

Script sizin için gereken işlemleri yapacak.

Son olarak IDX'te sol üstteki 3 çizgiye tıklayın, File > Open folder kısmından home/user/proje-adi klasörüne gidin ve çalışmaya başlayın.

----

<h3>EN</h3>

If you are using Project IDX and create a React Native project, Expo's @latest template will come.
Although this template is good, it makes it difficult for beginners to name it because of its complicated file structure.

This script will create an Expo application in IDX that uses the blank template.
If you want to change the template, you can edit the code.

**How ​​to use?**

_**Bash script**_ - Recommended

First, download the <code>idx-expo-templates.sh</code> file.

<p>Then <a href="https://idx.google.com/new/react-native">create a new project in Project IDX with the React Native template.</a></p>

Wait until the Android emulator and your application come up. Never close the Android emulator while doing these operations.

Then click on the 3 lines at the top right of IDX, go to the home/user/ folder from File > Open folder and drop the script into that folder.

Then open a new terminal by clicking Ctrl+Shift+".

Run the command <code>bash idx-expo-templates.sh project-name</code>. Write the project name in the <code>project-name</code> section. If you don't write it, it will be created automatically with the name <code>rn-proje_</code>.

If Expo is not installed, it will ask you to install it. You can continue by typing <code>y</code>.

The script will do the necessary operations for you.

_**Node.js script**_

First, download the <code>idx-expo-templates.js</code> file.

<p>Then <a href="https://idx.google.com/new/react-native">Create a new project with the React Native template in Project IDX.</a></p>

Wait until the Android emulator and your application appear next. Never close the Android emulator while doing these operations.

Then click on the 3 lines on the top left in IDX Click, go to the home/user/ folder from File > Open folder and drop the script into that folder.

Then open a new terminal by clicking Ctrl+Shift+".

Run the command <code>npm install fs-extra</code>.

Run the command <code>bash idx-expo-templates.sh project-name</code>. Write the project name in the <code>project-name</code> section. If you don't write it, it will be created automatically with the name <code>rn-proje_</code>.

If Expo is not installed, it will ask you to install it. You can continue by typing <code>y</code>.

The script will do the necessary operations for you.

Finally, click on the 3 lines on the top left of IDX, go to the home/user/project-name folder from File > Open folder and start working.
