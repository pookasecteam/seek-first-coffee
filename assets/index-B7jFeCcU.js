(function () {
  const drinks = [
    { image: "./images/espresso-pull.svg", label: "The pull", alt: "Espresso being pulled into a cup" },
    { image: "./images/iced-latte.svg", label: "Iced", alt: "Iced latte in a clear cup" },
    { image: "./images/cortado.svg", label: "Cortado", alt: "Cortado with latte art" },
    { image: "./images/tumbler.svg", label: "Take it with you", alt: "Seek First branded tumbler" },
    { image: "./images/pink-mug.svg", label: "In the hand", alt: "Coffee in a pink mug" }
  ];
  const menu = {
    CLASSICS: [
      { name: "Mocha", price: "$6.00", note: "chocolate sauce + steamed milk + espresso" },
      { name: "White Mocha", price: "$6.00", note: "white chocolate sauce & syrup + steamed milk + espresso" },
      { name: "Latte", price: "$5.00", note: "10oz steamed milk + espresso" },
      { name: "Americano", price: "$3.50", note: "10oz hot water + espresso" },
      { name: "Breve", price: "$6.50", note: "steamed half & half + espresso" },
      { name: "Cappuccino", price: "$5.00", note: "8oz steamed milk/foam + espresso" },
      { name: "Cortado", price: "$4.00", note: "2oz steamed milk + espresso" },
      { name: "Short Mac", price: "$3.00", note: "espresso + dollop of steamed milk foam" }
    ],
    SIGNATURE: [
      { name: "Banana Bread Latte", price: "$6.50", note: "smooth espresso meets banana bread flavor" },
      { name: "Raspberry White Mocha", price: "$6.50", note: "classic white mocha + raspberry" },
      { name: "Turtle Latte", price: "$6.50", note: "chocolate + hazelnut + caramel" },
      { name: "French Toast Latte", price: "$6.50", note: "sweet cinnamon + maple" },
      { name: "Old Fashioned", price: "$6.00", note: "caramel + vanilla latte" },
      { name: "Chai Tea Latte", price: "$6.00", note: "chai + steamed milk" },
      { name: "Dirty Chai Tea Latte", price: "$6.50", note: "chai + steamed milk + espresso" },
      { name: "Iced Shaken Brown Sugar Cinnamon Espresso", price: "$6.00" }
    ],
    "NON-COFFEE": [
      { name: "Hot Chocolate", price: "$4.00" },
      { name: "Hot Tea", price: "$3.00" },
      { name: "Chai Tea", price: "$4.00" },
      { name: "Steamer", price: "$4.00", note: "steamed milk + 1 flavored syrup" },
      { name: "Italian Cream Soda", price: "$4.50", note: "ask about our flavors" }
    ],
    "ADD-ONS": [
      { name: "Alternative milk (oat)", price: "$1.00" },
      { name: "Extra shot", price: "$1.00" },
      { name: "Extra flavor", price: "$0.75" }
    ]
  };
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function menuBlock(title, items) {
    return '<div class="menu-block"><h3 class="menu-block__title">' + esc(title) + '</h3><ul class="menu-list">' + items.map(function (item) {
      return '<li class="menu-item"><div class="menu-item__row"><span class="menu-item__name">' + esc(item.name) + '</span><span class="menu-item__rule"></span><span class="menu-item__price">' + esc(item.price) + '</span></div>' + (item.note ? '<p class="menu-item__note">' + esc(item.note) + '</p>' : '') + '</li>';
    }).join('') + '</ul></div>';
  }
  function igSvg() {
    return '<svg viewBox="0 0 88 118" class="social-mark social-mark--ig" aria-hidden="true"><path class="social-mark__wash social-mark__wash--soft" d="M46 6c22 3 36 24 34 52-2 26-16 50-34 54-19 3-36-18-38-48C6 34 22 3 46 6z"/><path class="social-mark__wash" d="M44 10c19 2 31 22 29 48-2 24-14 46-30 49-17 2-32-17-34-44C7 36 23 8 44 10z"/><path class="social-mark__crease" d="M43 22c-7 16 8 28 1 46-6 14 4 24 2 32"/><g transform="translate(20 39)"><rect x="6" y="6" width="36" height="36" rx="10" fill="none" stroke="#f6efe4" stroke-width="2.6"/><circle cx="24" cy="24" r="8.2" fill="none" stroke="#f6efe4" stroke-width="2.6"/><circle cx="36.2" cy="12.2" r="2.1" fill="#f6efe4"/></g></svg>';
  }
  function fbSvg() {
    return '<svg viewBox="0 0 88 118" class="social-mark social-mark--fb" aria-hidden="true"><path class="social-mark__wash social-mark__wash--soft" d="M42 7c21 4 35 26 33 53-3 25-18 49-35 52C21 115 6 92 8 62 10 34 22 3 42 7z"/><path class="social-mark__wash" d="M44 11c18 3 30 23 28 48-2 23-15 45-31 48-16 2-30-16-32-43C7 37 24 8 44 11z"/><path class="social-mark__crease" d="M45 23c6 15-8 29-2 46 5 14-3 24-1 32"/><path fill="#f6efe4" d="M50 32h-7.2c-5.4 0-8.8 3.2-8.8 8.6V48H28v8.6h6v20.2h10V56.6h6.8l1.8-8.6h-8.6v-6.6c0-2.5 1.3-3.6 3.8-3.6H50V32z"/></svg>';
  }
  const root = document.getElementById('root');
  const drinkHtml = drinks.map(function (d, i) {
    const on = i === 0;
    return '<div class="ag-panel' + (on ? ' ag-panel--active' : '') + '" role="listitem" tabindex="0" aria-label="' + esc(d.label) + '" data-index="' + i + '" style="border-radius:18px;flex-grow:' + (on ? '4.6' : '1') + '"><span class="ag-panel__frame"><span class="ag-panel__media" style="--ag-gray:' + (on ? '0' : '1') + ';--ag-dim:' + (on ? '0' : '.35') + '"><img src="' + d.image + '" alt="' + esc(d.alt) + '" draggable="false"></span><span class="ag-panel__overlay" aria-hidden="true"></span></span><span class="ag-panel__label" aria-hidden="true"><span class="ag-panel__bar" style="opacity:' + (on ? '1' : '0') + '"></span><span class="ag-panel__text" style="opacity:' + (on ? '1' : '0') + '">' + esc(d.label) + '</span></span></div>';
  }).join('');
  root.innerHTML = '<div class="page">' +
    '<div class="paper" aria-hidden="true">' +
    '<img class="paper__wash paper__wash--1" src="./images/washes/wash-stains.svg" alt="">' +
    '<img class="paper__wash paper__wash--2" src="./images/washes/wash-spill.svg" alt="">' +
    '<img class="paper__wash paper__wash--3" src="./images/washes/wash-hills.svg" alt="">' +
    '<img class="paper__wash paper__wash--4" src="./images/washes/wash-beans.svg" alt="">' +
    '<img class="paper__wash paper__wash--5" src="./images/washes/wash-steam.svg" alt="">' +
    '</div>' +
    '<header class="hero"><img class="hero__logo" src="./images/logo-brown.svg" alt="Seek First coffee co." width="280" height="280"><p class="hero__place">Junction City · Kansas</p></header>' +
    '<section class="trailer" aria-label="The trailer"><figure class="trailer__frame"><img class="trailer__art" src="./images/trailer-watercolor.svg" alt="Watercolor of the Seek First coffee trailer"></figure></section>' +
    '<section class="story"><div class="story__copy"><p class="eyebrow">Matt &amp; Annie</p><p>We park the trailer and slide the window open. That\'s the whole invitation.</p><p>Most days you\'ll find us in Junction City. Some days Manhattan. Some days Abilene. Come as you are. We\'ll make your drink, and if you come back, we\'ll remember it.</p><p>This is a small window on the side of a trailer. We hope it feels like it was waiting for you.</p></div></section>' +
    '<section class="verse" aria-label="Matthew 6:33"><blockquote class="verse__body"><p>But seek first his kingdom and his righteousness, and all these things will be given to you as well.</p><cite>Matthew 6:33</cite></blockquote></section>' +
    '<section class="gallery" aria-label="Drinks"><p class="eyebrow">from the window</p><div class="accordion-gallery" role="list" aria-label="Image accordion gallery" style="--ag-accent:#f6efe4;--ag-overlay:#2c1810;--ag-text:#f6efe4;--ag-gap:10px;--ag-radius:18px;height:520px">' + drinkHtml + '</div></section>' +
    '<section class="menu" aria-label="Menu"><p class="eyebrow">the window menu</p><h2 class="menu__heading">What we make</h2><div class="menu__grid">' +
    menuBlock('Classics', menu.CLASSICS) + menuBlock('Signature', menu.SIGNATURE) + menuBlock('Non-coffee', menu['NON-COFFEE']) + menuBlock('Add-ons', menu['ADD-ONS']) +
    '</div><p class="menu__note">All hot drinks 12oz. Iced drinks 16oz.</p></section>' +
    '<footer class="socials"><p class="socials__invite">come sit with us</p><div class="socials__links">' +
    '<a href="https://www.instagram.com/seekfirstcoffeeco" target="_blank" rel="noreferrer" aria-label="Seek First Coffee Co. on Instagram">' + igSvg() + '<span>Instagram</span></a>' +
    '<a href="https://www.facebook.com/p/Seek-First-Coffee-Co-61567155421326/" target="_blank" rel="noreferrer" aria-label="Seek First Coffee Co. on Facebook">' + fbSvg() + '<span>Facebook</span></a>' +
    '</div><p class="socials__mark">SEEK FIRST coffee co.</p></footer></div>';
  const panels = Array.prototype.slice.call(root.querySelectorAll('.ag-panel'));
  function activate(index) {
    panels.forEach(function (panel, i) {
      const on = i === index;
      panel.classList.toggle('ag-panel--active', on);
      panel.style.flexGrow = on ? '4.6' : '1';
      const media = panel.querySelector('.ag-panel__media');
      if (media) { media.style.setProperty('--ag-gray', on ? '0' : '1'); media.style.setProperty('--ag-dim', on ? '0' : '.35'); }
      const bar = panel.querySelector('.ag-panel__bar');
      const text = panel.querySelector('.ag-panel__text');
      if (bar) bar.style.opacity = on ? '1' : '0';
      if (text) text.style.opacity = on ? '1' : '0';
    });
  }
  panels.forEach(function (panel, i) {
    panel.addEventListener('mouseenter', function () { activate(i); });
    panel.addEventListener('focus', function () { activate(i); });
    panel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); activate((i + 1) % panels.length); panels[(i + 1) % panels.length].focus(); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); activate((i - 1 + panels.length) % panels.length); panels[(i - 1 + panels.length) % panels.length].focus(); }
    });
  });
})();
