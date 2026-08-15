/**
 * COIFE SPECIALTY COFFEE - INTERACTIVE APP LOGIC
 * WhatsApp Number: 01018923524 (+201018923524)
 * Pure Vanilla JavaScript - 100% Reliable & Fast
 */

// Global Configuration
const CONFIG = {
  WHATSAPP_NUMBER: '201018923524',
  CURRENCY: 'ج.م',
  STORE_NAME: 'كافيه كويفي - Coife Specialty Coffee'
};

// Menu Items Database
const MENU_ITEMS = [
  // Hot Coffee
  {
    id: 'hot-1',
    name: 'فلات وايت مختص',
    nameEn: 'Specialty Flat White',
    category: 'hot',
    price: 65,
    tag: 'الأكثر طلباً',
    image: 'images/hero_coffee.jpg',
    desc: 'إسبريسو دبل شوت مستخلص بحرفية مع حليب مخملي مبخر ناعم ونوتات شوكولاتة.',
    flavorNotes: ['بندق محمص', 'شوكولاتة داكنة', 'قوام كريمي']
  },
  {
    id: 'hot-2',
    name: 'إسبريسو دبل شوت كولومبي',
    nameEn: 'Double Espresso Colombia',
    category: 'hot',
    price: 45,
    tag: 'محصول سنجل أورجن',
    image: 'images/espresso_shot.jpg',
    desc: 'مستخلص بضغط مثالي مع كريما ذهبية غنية، إيحاءات فاكهية ولمسة كراميل متوازنة.',
    flavorNotes: ['كريما ذهبية', 'كراميل', 'حموضة متوازنة']
  },
  {
    id: 'hot-3',
    name: 'قهوة V60 مقطرة يدوياً',
    nameEn: 'V60 Hand Drip Coffee',
    category: 'specialty',
    price: 75,
    tag: 'تحضير يدوي',
    image: 'images/pourover_v60.jpg',
    desc: 'استخلاص بطيء لأفخر حبوب البن الإثيوبي اليرغاشيفي لنقاء نكهة لا مثيل له.',
    flavorNotes: ['زهري', 'ياسمين', 'توت بري']
  },
  {
    id: 'hot-4',
    name: 'كورتادو كويفي الخاص',
    nameEn: 'Coife Signature Cortado',
    category: 'hot',
    price: 60,
    tag: 'توازن مثالي',
    image: 'images/hero_coffee.jpg',
    desc: 'نسبة متساوية 1:1 من الإسبريسو المركز والحليب المبخر لعشاق القهوة الصريحة.',
    flavorNotes: ['قوة النكهة', 'حليب دافئ', 'نكهة مركزة']
  },
  {
    id: 'hot-5',
    name: 'قهوة تركي مخصوص بالهيل والزعفران',
    nameEn: 'Special Turkish Coffee',
    category: 'hot',
    price: 40,
    tag: 'بن كويفي المطحون',
    image: 'images/coffee_beans.jpg',
    desc: 'بن محوج بخلطتنا الخاصة مع الهيل والزعفران مع وش ثقيل ورغوة مميزة.',
    flavorNotes: ['هيل فاخر', 'زعفران', 'وش غني']
  },

  // Iced & Cold Coffee
  {
    id: 'cold-1',
    name: 'سبانش لاتيه مثلج مكرمل',
    nameEn: 'Iced Spanish Caramel Latte',
    category: 'cold',
    price: 75,
    tag: 'الأكثر مبيعاً ❄️',
    image: 'images/iced_latte.jpg',
    desc: 'إسبريسو مثلج مع صوص الحليب المكثف المحضر منزلياً وصوص الكراميل والثلج الصافي.',
    flavorNotes: ['كراميل سائل', 'حلاوة معتدلة', 'منعش جداً']
  },
  {
    id: 'cold-2',
    name: 'كولد برو منقوع 24 ساعة',
    nameEn: 'Artisan 24H Cold Brew',
    category: 'cold',
    price: 70,
    tag: 'تخمير بارد',
    image: 'images/iced_latte.jpg',
    desc: 'مستخلص على البارد قطرة بقطرة لمدة 24 ساعة لنكهة ناعمة خالية من المرارة والحموضة.',
    flavorNotes: ['شوكولاتة بيضاء', 'فانيليا', 'حموضة منخفضة']
  },
  {
    id: 'cold-3',
    name: 'آيس أمريكانو كلاسيك',
    nameEn: 'Iced Americano Single Origin',
    category: 'cold',
    price: 50,
    tag: 'منعش وقوي',
    image: 'images/espresso_shot.jpg',
    desc: 'دبل شوت إسبريسو مع ماء مثلج نقي لنقاء النكهة وانتعاش الصيف.',
    flavorNotes: ['قوام خفيف', 'انتعاش', 'كافيين مركز']
  },

  // Bakery & Desserts
  {
    id: 'dessert-1',
    name: 'تشيز كيك سان سباستيان بالشوكولاتة',
    nameEn: 'San Sebastian Basque Cheesecake',
    category: 'dessert',
    price: 85,
    tag: 'طازج يومياً',
    image: 'images/cheesecake_croissant.jpg',
    desc: 'كعكة الجبن الإسبانية المحروقة بقوام ذائب كالحرير مع صوص الشوكولاتة البلجيكية الدافئة.',
    flavorNotes: ['شوكولاتة بلجيكية', 'قوام كريمي', 'مخبوز طازج']
  },
  {
    id: 'dessert-2',
    name: 'كرواسون زبدة فرنسي محشي باللوز',
    nameEn: 'French Almond Croissant',
    category: 'dessert',
    price: 65,
    tag: 'زبدة نقية 100%',
    image: 'images/cheesecake_croissant.jpg',
    desc: 'طبقات هشة ومقرمشة من الكرواسون الفرنسي الفاخر محشوة بكريمة اللوز ورقائق اللوز المحمص.',
    flavorNotes: ['زبدة طبيعية', 'لوز محمص', 'قرمشة خفيفة']
  },
  {
    id: 'dessert-3',
    name: 'كوكيز الشوكولاتة الذائبة والملح البحري',
    nameEn: 'Fudge Sea Salt Cookie',
    category: 'dessert',
    price: 45,
    tag: 'يقدم دافئاً',
    image: 'images/cheesecake_croissant.jpg',
    desc: 'كوكيز محشو بقطع شوكولاتة داكنة ذائبة ومرشوش بحبيبات ملح البحر الخشن الفاخر.',
    flavorNotes: ['شوكولاتة بلجيكية', 'ملح بحري', 'طري من الداخل']
  },

  // Coffee Beans for Home
  {
    id: 'beans-1',
    name: 'كيس بن إثيوبي يرغاشيفي (250 جم)',
    nameEn: 'Ethiopia Yirgacheffe Beans (250g)',
    category: 'beans',
    price: 220,
    tag: 'محصول مختص',
    image: 'images/coffee_beans.jpg',
    desc: 'حبوب كاملة أو مطحونة حسب رغبتك، معالجة مجففة بنوتات الأزهار والفاكهة الاستوائية.',
    flavorNotes: ['إيحاء زهري', 'فاكهة استوائية', 'تحميص أسبوعي']
  },
  {
    id: 'beans-2',
    name: 'كيس بن كولومبيا هويلا سوبريمو (250 جم)',
    nameEn: 'Colombia Huila Supremo (250g)',
    category: 'beans',
    price: 195,
    tag: 'حبوب فاخرة',
    image: 'images/coffee_beans.jpg',
    desc: 'مناسب لجميع أجهزة الإسبريسو والفلتر، قوام غني ونكهات شوكولاتة وكراميل متناغمة.',
    flavorNotes: ['شوكولاتة بالحليب', 'بندق', 'قوام ممتلئ']
  }
];

// Shopping Cart State
let cart = [];

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initTheme();
  renderMenu('all');
  initCategoryFilters();
  initSearch();
  initCart();
  initReservationForm();
  initFloatingWhatsApp();
});

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  // Sticky header shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  mobileBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    const isOpen = navLinks?.classList.contains('active');
    mobileBtn.innerHTML = isOpen ? '✕' : '☰';
  });

  // Close menu on link click
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('active');
      if (mobileBtn) mobileBtn.innerHTML = '☰';
      
      navItems.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

/* ==========================================================================
   THEME TOGGLE (DARK ESPRESSO / WARM LATTE)
   ========================================================================== */
function initTheme() {
  const themeBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('coife_theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeBtn) themeBtn.innerHTML = '☀️';
  } else {
    if (themeBtn) themeBtn.innerHTML = '🌙';
  }

  themeBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('coife_theme', isDark ? 'dark' : 'light');
    themeBtn.innerHTML = isDark ? '☀️' : '🌙';
    showToast(isDark ? 'تم تفعيل مود القهوة المسائي ☕🌙' : 'تم تفعيل مود القهوة الصباحي ☀️☕');
  });
}

/* ==========================================================================
   MENU RENDERING & FILTERING
   ========================================================================== */
function renderMenu(category = 'all', searchQuery = '') {
  const menuGrid = document.getElementById('menu-grid');
  if (!menuGrid) return;

  let filtered = MENU_ITEMS;

  if (category !== 'all') {
    filtered = filtered.filter(item => item.category === category);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.nameEn.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.flavorNotes.some(f => f.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">☕🔍</div>
        <h3>لم نجد مشروبات مطابقة لبحثك</h3>
        <p style="color: var(--text-muted); margin-top: 8px;">جرب البحث بكلمة أخرى أو اختر أحد التصنيفات أعلاه</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filtered.map(item => `
    <article class="menu-card" data-id="${item.id}">
      <div class="menu-card-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='images/hero_coffee.jpg'">
        ${item.tag ? `<span class="badge-tag">${item.tag}</span>` : ''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-header">
          <div>
            <h3 class="menu-card-title">${item.name}</h3>
            <span class="menu-card-en">${item.nameEn}</span>
          </div>
          <div class="menu-card-price">${item.price} ${CONFIG.CURRENCY}</div>
        </div>
        <p class="menu-card-desc">${item.desc}</p>
        <div class="flavor-notes">
          ${item.flavorNotes.map(n => `<span class="flavor-chip">✦ ${n}</span>`).join('')}
        </div>
        <div class="menu-card-actions">
          <button class="btn-add-cart" onclick="addToCart('${item.id}')">
            <span>🛒</span> أضف للسلة
          </button>
          <button class="btn-quick-wa" title="طلب فوري عبر واتساب" onclick="quickOrderWhatsApp('${item.id}')">
            💬
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function initCategoryFilters() {
  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category || 'all';
      const searchInput = document.getElementById('menu-search');
      renderMenu(cat, searchInput?.value || '');
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('menu-search');
  searchInput?.addEventListener('input', (e) => {
    const activeCatBtn = document.querySelector('.cat-btn.active');
    const currentCat = activeCatBtn?.dataset.category || 'all';
    renderMenu(currentCat, e.target.value);
  });
}

/* ==========================================================================
   CART SYSTEM & WHATSAPP CHECKOUT
   ========================================================================== */
function initCart() {
  const cartToggleBtn = document.getElementById('cart-toggle');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartCloseBtn = document.getElementById('cart-close');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  function openCart() {
    cartDrawer?.classList.add('active');
    cartOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer?.classList.remove('active');
    cartOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  cartToggleBtn?.addEventListener('click', openCart);
  cartCloseBtn?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  checkoutBtn?.addEventListener('click', checkoutWhatsApp);
}

window.addToCart = function(itemId) {
  const product = MENU_ITEMS.find(i => i.id === itemId);
  if (!product) return;

  const existing = cart.find(i => i.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`تمت إضافة "${product.name}" إلى السلة ☕`);
};

window.updateCartQty = function(itemId, delta) {
  const itemIndex = cart.findIndex(i => i.id === itemId);
  if (itemIndex === -1) return;

  cart[itemIndex].qty += delta;
  if (cart[itemIndex].qty <= 0) {
    cart.splice(itemIndex, 1);
  }

  updateCartUI();
};

window.removeCartItem = function(itemId) {
  cart = cart.filter(i => i.id !== itemId);
  updateCartUI();
  showToast('تم حذف العنصر من السلة');
};

function updateCartUI() {
  const badge = document.getElementById('cart-badge-count');
  const itemsContainer = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  if (subtotalEl) subtotalEl.textContent = `${totalPrice} ${CONFIG.CURRENCY}`;
  if (totalEl) totalEl.textContent = `${totalPrice} ${CONFIG.CURRENCY}`;

  if (checkoutBtn) {
    checkoutBtn.disabled = cart.length === 0;
    checkoutBtn.style.opacity = cart.length === 0 ? '0.5' : '1';
    checkoutBtn.style.cursor = cart.length === 0 ? 'not-allowed' : 'pointer';
  }

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">☕🛒</div>
        <h4>سلة الطلبات فارغة حالياً</h4>
        <p>اختر مشروباتك وحلوياتك المفضلة من المنيو لإضافتها هنا</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='images/hero_coffee.jpg'">
      </div>
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <div class="cart-item-price">${item.price * item.qty} ${CONFIG.CURRENCY} (${item.price} للواحد)</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span style="font-weight: 700; padding: 0 4px;">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="cart-item-delete" title="حذف" onclick="removeCartItem('${item.id}')">🗑️</button>
    </div>
  `).join('');
}

// WhatsApp Direct Checkout for Entire Cart
function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast('سلتك فارغة! أضف مشروبات أولاً.');
    return;
  }

  const notesInput = document.getElementById('cart-customer-notes');
  const customerNotes = notesInput ? notesInput.value.trim() : '';

  const orderType = document.querySelector('input[name="order-type"]:checked')?.value || 'استلام من الفرع';

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  let message = `*طلب جديد من موقع كافيه كويفي Coife* ☕✨\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*نوع الطلب:* ${orderType}\n\n`;
  message += `*تفاصيل المشروبات والأصناف:*\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* (الكمية: ${item.qty}) - السعر: ${item.price * item.qty} ${CONFIG.CURRENCY}\n`;
  });

  message += `\n*الإجمالي النهائي:* ${totalPrice} ${CONFIG.CURRENCY}\n`;

  if (customerNotes) {
    message += `*ملاحظات إضافية:* ${customerNotes}\n`;
  }

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `_أرجو تأكيد استلام الطلب وتجهيزه. شكراً لكم!_`;

  const encodedUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
}

// 1-Click Quick WhatsApp Order for Single Item
window.quickOrderWhatsApp = function(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  let message = `مرحباً كافيه كويفي ☕✨\n`;
  message += `أود طلب صنف محدد من المنيو:\n\n`;
  message += `*المشروب/الصنف:* ${item.name} (${item.nameEn})\n`;
  message += `*السعر:* ${item.price} ${CONFIG.CURRENCY}\n\n`;
  message += `يرجى تأكيد التوافر وطريقة الاستلام أو التوصيل.`;

  const encodedUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
};

/* ==========================================================================
   RESERVATION FORM VIA WHATSAPP
   ========================================================================== */
function initReservationForm() {
  const resForm = document.getElementById('reservation-form');
  if (!resForm) return;

  resForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('res-name')?.value.trim();
    const phone = document.getElementById('res-phone')?.value.trim();
    const date = document.getElementById('res-date')?.value;
    const time = document.getElementById('res-time')?.value;
    const guests = document.getElementById('res-guests')?.value;
    const area = document.getElementById('res-area')?.value;
    const notes = document.getElementById('res-notes')?.value.trim();

    if (!name || !phone || !date || !time) {
      showToast('يرجى ملء كافة الحقول الأساسية للحجز');
      return;
    }

    let message = `*طلب حجز طاولة / ركن عمل - كافيه كويفي* ☕📅\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*الاسم:* ${name}\n`;
    message += `*رقم الهاتف:* ${phone}\n`;
    message += `*التاريخ:* ${date}\n`;
    message += `*الوقت:* ${time}\n`;
    message += `*عدد الأفراد:* ${guests}\n`;
    message += `*منطقة الجلوس المفضلة:* ${area}\n`;
    if (notes) {
      message += `*ملاحظات خاصة:* ${notes}\n`;
    }
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `_أرجو تأكيد حجز الطاولة وإبلاغي بالموافقة. شكراً لكم!_`;

    const encodedUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(encodedUrl, '_blank');
    showToast('جاري فتح واتساب لتأكيد الحجز... 📅☕');
  });
}

/* ==========================================================================
   FLOATING WHATSAPP BUTTON & CHAT POPUP
   ========================================================================== */
function initFloatingWhatsApp() {
  const floatBtn = document.getElementById('floating-wa-btn');
  const chatBubble = document.getElementById('wa-chat-bubble');

  floatBtn?.addEventListener('click', () => {
    let message = `مرحباً كافيه كويفي 👋☕ أود الاستفسار عن المنيو والخدمات المتاحة لديكم اليوم.`;
    const encodedUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(encodedUrl, '_blank');
  });

  // Auto hide bubble after 10 seconds or clicking it
  chatBubble?.addEventListener('click', () => {
    chatBubble.style.display = 'none';
  });

  setTimeout(() => {
    if (chatBubble) {
      chatBubble.style.opacity = '0.9';
    }
  }, 10000);
}

/* ==========================================================================
   TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>☕</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
