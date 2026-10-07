# Google Play mağaza metni ve yayın durumu

Bu dosya Play Console'a girilecek mağaza metinlerinin taslağıdır. Play Console'a giriş, uygulama yükleme veya mağazaya gönderim yapılmamıştır.

## Mağaza metni taslağı

**Uygulama adı:** BOLET Döner Wien

**Varsayılan mağaza dili:** Almanca (Avusturya)

**Kısa açıklama:** Authentischer Döner in Wien: Menü, Preise, Öffnungszeiten und Anfahrt.

**Uzun açıklama:**

BOLET Döner Wien – Authentischer Döner am Friedrich-Engels-Platz.

Entdecke das Menü von BOLET Döner Wien und finde alle wichtigen Informationen für deinen Besuch an einem Ort:

- Menü und aktuelle Preise ansehen
- Öffnungszeiten für jeden Tag prüfen
- Adresse in Google Maps öffnen
- Direkt im Restaurant anrufen
- BOLET auf TikTok folgen

BOLET Döner Wien  
Friedrich-Engels-Platz 21  
1200 Wien, Österreich

Täglich geöffnet: 08:00–22:00 Uhr  
Telefon: +43 660 6980025

Die App bietet keine Onlinebestellung, Zahlung, Reservierung oder Mitgliedschaft. Preise können sich ändern. Der angezeigte Schnitzelpreis ist ungefähr; bitte vor Ort erfragen. Beispielbilder sind keine Fotos des BOLET-Restaurants.

**Kategorie:** Essen & Trinken

**Support-Telefon:** +43 660 6980025

## Play Console öncesi tamamlanması gerekenler

- **İmzalı Android App Bundle:** Bu ortamda Java, Android Studio/SDK, Gradle ve çalışan npm/pnpm bulunmadığı için `.aab` üretilemedi. Google Play'in 31 Ağustos 2026 itibarıyla yeni uygulamalarda Android 16 / API 36 hedef şartı bulunuyor. Capacitor 8.x bu hedefle eşleşiyor; native proje henüz üretilmedi.
- **Play Console hesabı:** Bu tarayıcıda geliştirici hesabına bağlı bir oturum veya Play Console erişimi bulunmuyor. Uygulama Console'a yüklenmedi.
- **Zorunlu destek e-postası:** İşletme için e-posta adresi mevcut bilgilerde yok; uydurulmadı. Play Console mağaza iletişiminde destek e-postası gerekiyor.
- **Gizlilik URL'si:** Uygulama içi [gizlilik metni](./privacy.html) hazır, ancak herkese açık HTTPS adresinde yayımlanmış değil. Play Console'a çalışan bir URL eklenmeli.
- **Mağaza görselleri:** Uygulama ikonu hazır. Telefon ekran görüntülerini gerçek Android derlemesinden almak gerekiyor. Mekân/ürün fotoğrafı olmadığı için mevcut görseller temsilî olarak işaretli.
- **App content / Data safety:** Beyanlar, yayınlanacak son paketin ağ istekleri ve üçüncü taraf içerikleriyle karşılaştırılarak Play Console'da tamamlanmalı. Uygulamadaki örnek görseller Unsplash'tan yükleniyor; bu bağlantının veri davranışı gizlilik metninde açıklanıyor.
- **Test ve üretim erişimi:** 13 Kasım 2023'ten sonra oluşturulmuş kişisel geliştirici hesapları için üretim erişimi öncesi en az 12 test kullanıcısıyla 14 günlük kesintisiz kapalı test şartı geçerli olabilir. Hesap türüne bağlı gerekliliği Console'dan kontrol edin.
- **Paket kimliği:** `at.bolet.donerwien` seçildi. Console'da kullanmadan önce BOLET için kalıcı ve uygun olduğunu doğrulayın.

Resmî belgeler: [Uygulama ve mağaza listelemesi](https://support.google.com/googleplay/android-developer/answer/9859152?hl=en), [API hedefi](https://support.google.com/googleplay/android-developer/answer/11926878?hl=en), [test şartları](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en), [Data safety](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en).
