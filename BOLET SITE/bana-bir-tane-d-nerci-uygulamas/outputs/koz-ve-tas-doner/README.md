# BOLET Döner Wien

BOLET için premium, mobil öncelikli bir işletme uygulaması başlangıç paketi. Menü, çalışma saatleri, telefon, adres/Google Maps, işletme hikâyesi, temsilî fotoğraf galerisi ve TikTok bağlantısı içerir. Uygulama Türkçe ağırlıklıdır; Avusturya'daki müşteriler için bazı ürün adları ve marka ifadeleri Almancadır.

## Özellikler

- Filtrelenebilir ürün menüsü ve fiyat kartları
- Yerel saate göre bugün açık/kapalı durumu ve haftalık saatler
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

Fiyatlar işletme sahibinin paylaştığı bilgilerdir. Schnitzel fiyatı özellikle yaklaşık olarak işaretlenmiştir. Ürün adı net olmayan yaklaşık 4,50 €'luk sandviç, adı teyit edilene kadar eklenmemiştir. Son yayımdan önce fiyatları, ürün adlarını ve alerjen/içerik bilgilerini işletmede doğrulayın.

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

Apple incelemesi, uygulamanın basit bir web sitesi sarmalından öte yeterli işlev sunup sunmadığını [App Review Guidelines 4.2](https://developer.apple.com/app-store/review/guidelines/) kapsamında değerlendirebilir. Bu uygulamada çevrimiçi sipariş/ödeme bulunmadığından App Store'a başvurudan önce menü filtreleri, çevrimdışı bilgilere erişim ve native gezinme gibi uygulama değerinin gerçek cihazlarda gözden geçirilmesi gerekir. Mağaza kabulü garanti edilemez. Google Play'de gizlilik politikası ve Data safety beyanı gerçek veri akışlarıyla uyumlu olmalıdır; [Google Play Data safety](https://support.google.com/googleplay/android-developer/answer/10787469) yönergelerini inceleyin.

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
