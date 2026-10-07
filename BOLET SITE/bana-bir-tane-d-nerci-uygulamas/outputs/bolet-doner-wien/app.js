(() => {
  "use strict";

  const products = [
    { id: "chicken-doner", name: "Tavuk Döner Sandviç", german: "Hühner Döner Sandwich", category: "doner", badge: "AUTHENTISCHER DÖNER", description: "Hühner Döner im Brot.", price: "4,90 €", art: "doner", image: "https://images.unsplash.com/photo-1644364935906-792b2245a2c0?auto=format&fit=crop&w=1000&q=80" },
    { id: "beef-doner", name: "Et Döner Sandviç", german: "Rind Döner Sandwich", category: "doner", badge: "AUTHENTISCHER DÖNER", description: "Rind Döner im Brot.", price: "5,90 €", art: "doner", image: "https://images.unsplash.com/photo-1565560665129-4831aa15206c?auto=format&fit=crop&w=1000&q=80" },
    { id: "pizza-slice", name: "Pizzaschnitte", german: "Tüm çeşitler · alle Sorten", category: "pizza", badge: "PIZZASCHNITTE", description: "Bütün pizza dilimi çeşitleri · alle Sorten.", price: "2,00 €", art: "pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80" },
    { id: "family-pizza", name: "Familienpizza", german: "Aile boyu pizza", category: "pizza", badge: "ZUM TEILEN", description: "Paylaşmalık aile pizzası · zum Teilen.", price: "18,00 €", art: "pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80" },
    { id: "schnitzel", name: "Schnitzel", german: "Şinitzel", category: "andere", badge: "BOLET MENÜSÜNDEN", description: "Fiyatı yaklaşık verilmiştir; lütfen işletmeden teyit edin.", price: "5,00 €", approximate: true, art: "schnitzel", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=80" }
  ];
  const categories = [
    { id: "all", label: "Tümü" }, { id: "doner", label: "Döner" }, { id: "pizza", label: "Pizza" }, { id: "andere", label: "Diğer" }
  ];
  const weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  let activeCategory = "all";
  let deferredInstall = null;
  let toastTimer = 0;

  const categoryList = document.getElementById("categoryList");
  const productGrid = document.getElementById("productGrid");
  const toast = document.getElementById("toast");

  function renderCategories() {
    categoryList.innerHTML = categories.map((category) =>
      '<button class="category-button' + (activeCategory === category.id ? " selected" : "") + '" type="button" aria-pressed="' + (activeCategory === category.id) + '" data-category="' + category.id + '">' + category.label + '</button>'
    ).join("");
  }

  function renderProducts() {
    const visible = products.filter((product) => activeCategory === "all" || product.category === activeCategory);
    productGrid.innerHTML = visible.map((product) =>
      '<article class="product-card"><div class="product-art" role="img" aria-label="' + product.name + ' için temsilî örnek fotoğraf" data-art="' + product.art + '" style="--product-image:url(\'' + product.image + '\')"><span class="product-art-label">' + product.badge + '</span><span class="product-photo-label">ÖRNEK FOTOĞRAF</span><span class="product-seal">B.</span></div>' +
      '<div class="product-card-body"><div class="product-meta"><span>' + product.german + '</span><span class="product-mark">✳</span></div><h3>' + product.name + '</h3><p>' + product.description + '</p><div class="product-buy"><span class="product-price">' + product.price + (product.priceRange ? '<small>fiyat aralığı</small>' : product.approximate ? '<small>ca. / yaklaşık</small>' : '') + '</span><span class="menu-item-kind">' + (product.priceRange ? 'FİYATI TEYİT EDİN' : product.approximate ? 'TAHMİNİ FİYAT' : 'ÜRÜN FİYATI') + '</span></div></div></article>'
    ).join("");
  }

  function renderHours() {
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Vienna", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
    const local = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    const dayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(local.weekday);
    const current = Number(local.hour) * 60 + Number(local.minute);
    const open = current >= 8 * 60 && current < 22 * 60;
    const status = document.getElementById("openStatus");
    status.classList.toggle("closed", !open);
    status.querySelector("span").textContent = open ? "Şu an açık" : "Şu an kapalı";
    document.getElementById("hoursList").innerHTML = weekdays.map((day, index) =>
      '<li class="' + (index === dayIndex ? "today" : "") + '"><span>' + day + (index === dayIndex ? " · Bugün" : "") + '</span><strong>08:00 – 22:00</strong></li>'
    ).join("");
  }

  function announce(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function showInstallHelp() {
    if (deferredInstall) {
      deferredInstall.prompt();
      deferredInstall.userChoice.finally(() => { deferredInstall = null; });
      return;
    }
    const agent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(agent)) announce("Safari'de Paylaş'a dokunup ‘Ana Ekrana Ekle’yi seçin.");
    else announce("Tarayıcı menüsünde ‘Uygulamayı yükle’ veya ‘Ana ekrana ekle’yi seçin.");
  }

  document.addEventListener("click", (event) => {
    const category = event.target.closest("[data-category]");
    if (category) {
      activeCategory = category.dataset.category;
      renderCategories();
      renderProducts();
      return;
    }
    const action = event.target.closest("[data-action]");
    if (action?.dataset.action === "install") showInstallHelp();
  });

  document.querySelectorAll('a[href="#menu"]').forEach((link) => link.addEventListener("click", () => {
    activeCategory = "all";
    renderCategories();
    renderProducts();
  }));

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstall = event;
  });
  window.addEventListener("appinstalled", () => announce("BOLET ana ekranınıza eklendi."));

  if ("IntersectionObserver" in window) {
    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(".desktop-nav .nav-link, .mobile-nav .mobile-tab");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-28% 0px -60% 0px" });
    sections.forEach((section) => observer.observe(section));
  }

  document.getElementById("year").textContent = String(new Date().getFullYear());
  renderCategories();
  renderProducts();
  renderHours();
  window.setInterval(renderHours, 60 * 1000);
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
})();
