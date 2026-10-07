# BOLET Döner Wien

BOLET için premium, mobil öncelikli işletme uygulaması. Menü, çalışma saatleri, telefon, adres/Google Maps, işletme hikâyesi, temsilî fotoğraf galerisi ve TikTok bağlantısı içerir. Uygulama Türkçe ağırlıklıdır; Avusturya'daki müşteriler için bazı ürün adları ve marka ifadeleri Almancadır. `dist/` klasöründe web sunucusunda yayınlanabilen statik PWA dosyaları bulunur.

## Özellikler

- Filtrelenebilir ürün menüsü ve fiyat kartları
- Wien saatine göre bugün açık/kapalı durumu ve haftalık saatler
- Telefon araması, adres ve Google Maps bağlantısı
- BOLET aile hikâyesi ve TikTok profiline bağlantı
- Mobil alt gezinme, ana ekrana ekleme ve PWA çevrimdışı uygulama kabuğu
- Gizlilik açıklaması ve kullanım bilgileri
- Android, iOS ve Web için Capacitor yapılandırması

Uygulama çevrimiçi sipariş, ödeme, rezervasyon, üyelik veya kullanıcı hesabı sunmaz.

## Menü bilgileri

| Ürün | Fiyat |
| --- | ---: |
| Tavuk Döner Sandviç | 4,90 € |
| Et Döner Sandviç | 5,90 € |
| Pizzaschnitte — tüm çeşitler | 2,00 € |
| Familienpizza | 18,00 € |
| Schnitzel | yaklaşık 5,00 € |

Fiyatlar işletme sahibinin paylaştığı bilgilerdir. Schnitzel fiyatı yaklaşık olarak işaretlenmiştir. Son yayımdan önce fiyatları, ürün adlarını ve alerjen/içerik bilgilerini işletmede doğrulayın.

## Geliştirme

Node.js 22+ kurulu bir ortamda proje klasöründen:

```sh
npm install
npm run start
```

Yerel dağıtım dosyalarını oluşturmak için:

```sh
npm run build
```

Çıktı `dist/` klasörüne yazılır. Capacitor platform kabuklarını ilk kez ekleyip güncellemek için:

```sh
npx cap add android
npx cap add ios
npx cap sync
```

Android uygulamasını Android Studio/Android SDK ile derleyip imzalamak gerekir. iOS uygulaması için macOS ve Xcode gerekir. Hedef sistem ve sürüm gereksinimleri için [Capacitor ortam kurulum belgesine](https://capacitorjs.com/docs/getting-started/environment-setup) bakın.

## Mağaza gönderimi hakkında

Bu klasör yayınlanmış veya mağazaya yüklenmiş bir uygulama değildir; imzalı Android App Bundle/APK ya da iOS arşivi içermez. Google Play ve App Store hesapları, imzalama, ekran görüntüleri, mağaza açıklamaları ve inceleme gönderimi ayrıca tamamlanmalıdır.

Google Play'e yeni uygulama gönderiminde 31 Ağustos 2026'dan itibaren Android 16 / API 36 hedefi gerekir. Capacitor Android 8.x bu hedef SDK ile eşleşir; Capacitor 8 için Android Studio 2025.2.1 ve Android SDK gereklidir. [Google Play hedef API şartları](https://support.google.com/googleplay/android-developer/answer/11926878?hl=en) · [Capacitor Android hedef SDK eşlemesi](https://next.capacitorjs.com/docs/next/android/setting-target-sdk) · [Capacitor ortam gereksinimleri](https://capacitorjs.com/docs/getting-started/environment-setup).

Yeni kişisel geliştirici hesabı için üretim erişiminden önce en az 12 test kullanıcısının 14 gün boyunca kesintisiz katıldığı kapalı test istenir. [Google Play test şartları](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en).

Play Console ayrıca imzalı `.aab`, destek e-posta adresi, herkese açık gizlilik politikası URL'si, mağaza görselleri ve App content/Data safety beyanları ister. [Play Console mağaza kurulumu](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en) · [Data safety formu](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en).

Apple incelemesi, uygulamanın basit bir web sitesi sarmalından öte yeterli işlev sunup sunmadığını [App Review Guidelines 4.2](https://developer.apple.com/app-store/review/guidelines/) kapsamında değerlendirebilir. Bu uygulamada çevrimiçi sipariş/ödeme bulunmadığından mağaza kabulü garanti edilemez.

Yayımdan önce:

1. Yaklaşık Schnitzel fiyatını, menü adlarını ve tüm fiyatları BOLET'te teyit edin.
2. Ürün, alerjen ve çapraz bulaşma bilgisini işletmeden doğrulayın.
3. Galerideki temsilî Unsplash görsellerini BOLET'in gerçek, izinli fotoğraflarıyla değiştirin. Şu an uygulamada BOLET'e ait fotoğraf bulunmuyor.
4. Maps arama bağlantısını varsa BOLET'in doğrulanmış doğrudan Google Maps profil bağlantısıyla değiştirin. Instagram profili paylaşılmadığı için eklenmemiştir; TikTok bağlantısı @boletdoner adresine gider.
5. Gizlilik metnini ve mağaza beyanlarını son uygulamanın ağ istekleri, native eklentileri ve dağıtım biçimiyle karşılaştırın.
6. Uygulamayı hedef Android ve iOS cihazlarında, ekran okuyucuyla ve zayıf/çevrimdışı bağlantıda inceleyin; mağaza görselleri ve destek bağlantılarını hazırlayın.

Capacitor uygulama kimliği `at.bolet.donerwien` başlangıç değeridir; geliştirici hesabınızda kullanılabilir olduğunu ve BOLET için doğru kalıcı kimlik olduğunu mağaza projelerini oluşturmadan önce doğrulayın.

## İşletme bilgileri

- **İşletme:** BOLET DÖNER WIEN
- **Adres:** Friedrich-Engels-Platz 21, 1200 Wien, Österreich
- **Telefon:** +43 660 6980025
- **Saatler:** Her gün 08:00–22:00
- **Sahipler:** Hüseyin Bolat ve Mükremin Bolat
- **Konsept:** Authentischer Döner
- **Yeniden açılış:** Nisan 2025

Ürünler, çalışma saatleri ve işletme metinleri `app.js` ile `index.html` içindedir. Uygulama kimliği `capacitor.config.json`; PWA adı ve simgeleri `public/manifest.webmanifest` içindedir.

## Görseller ve ikonlar

Uygulamadaki yemek ve ortam fotoğrafları uzak Unsplash görsel adreslerinden yüklenir ve arayüzde temsilî oldukları belirtilir. Gerçek BOLET fotoğraflarıyla değiştirirken `app.js`, `index.html` ve ürün kartı görsel URL'lerini güncelleyin. Marka simgesi `public/assets/mark.svg`; uygulama ikonları `icon.svg`, `icon-512.png`, `icon-1024.png` ve `apple-touch-icon.png` dosyalarıdır.
