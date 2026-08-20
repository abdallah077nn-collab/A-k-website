/**
 * مكتبة تعلّم - Ta'allam Modern Frontend Bookstore
 * الملف البرمجي الرئيسي لإدارة التفاعل والواجهة
 */

// حالة التطبيق العامة
const AppState = {
  selectedCategory: "all",
  searchQuery: "",
  maxPrice: 450,
  minPrice: 100,
  sortBy: "popular",
  currentTheme: localStorage.getItem("taalam_theme") || "dark"
};

// مدير التوست الإشعارات
window.showToast = function(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const iconMap = {
    success: "fa-solid fa-circle-check text-emerald-400",
    error: "fa-solid fa-circle-xmark text-rose-500",
    info: "fa-solid fa-circle-info text-indigo-400",
    warning: "fa-solid fa-triangle-exclamation text-amber-400"
  };

  const toast = document.createElement("div");
  toast.className = `toast-message ${type}`;
  toast.innerHTML = `
    <i class="${iconMap[type] || iconMap.info}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 350);
  }, 3500);
};

// تهيئة الوضع الليلي والنهاري
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const body = document.body;

  if (AppState.currentTheme === "light") {
    body.classList.add("light-theme");
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    body.classList.remove("light-theme");
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isLight = body.classList.toggle("light-theme");
      AppState.currentTheme = isLight ? "light" : "dark";
      localStorage.setItem("taalam_theme", AppState.currentTheme);
      themeToggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
      window.showToast(isLight ? "تم تفعيل الوضع النهاري ☀️" : "تم تفعيل الوضع الليلي 🌙", "info");
    });
  }
}

// رسم شريط التصنيفات السريع
function renderCategoryPills() {
  const container = document.getElementById("categories-pills-container");
  if (!container) return;

  container.innerHTML = CATEGORIES_DATA.map(cat => `
    <button type="button" 
            class="category-pill-btn ${AppState.selectedCategory === cat.id ? 'active' : ''}" 
            data-category="${cat.id}">
      <i class="${cat.icon}"></i>
      <span>${cat.name}</span>
      <span class="cat-pill-count">${cat.count}</span>
    </button>
  `).join("");

  container.querySelectorAll(".category-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".category-pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.selectedCategory = btn.dataset.category;
      applyFilters();
    });
  });
}// توليد النجوم التقييمية
function generateStarsHtml(rating) {
  let starsHtml = "";
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fa-solid fa-star"></i>';
  }
  if (hasHalf) {
    starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
  }
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="fa-regular fa-star"></i>';
  }

  return starsHtml;
}

// رسم بطاقة كتاب واحدة
function createBookCardHtml(book) {
  const isWish = window.cartManager ? window.cartManager.isInWishlist(book.id) : false;
  const discountPercent = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100);

  return `
    <div class="book-card" data-id="${book.id}">
      <div class="book-cover-wrap" style="background: ${book.coverGradient}">
        <div class="book-spine-effect"></div>
        <span class="book-card-badge badge-${book.badgeType}">${book.badge}</span>
        
        <button type="button" 
                class="wishlist-toggle-btn ${isWish ? 'active' : ''}" 
                data-book-id="${book.id}" 
                onclick="window.cartManager.toggleWishlist(${book.id})" 
                title="إضافة للمفضلة">
          <i class="${isWish ? 'fa-solid fa-heart text-rose-500' : 'fa-regular fa-heart'}"></i>
        </button>

        <i class="${book.icon} book-cover-icon"></i>
        <h3 class="book-cover-title">${book.title}</h3>
        <span class="book-cover-meta-tag">${book.pages} صفحة • ${book.year}</span>
      </div>

      <div class="book-card-content">
        <span class="book-card-category">${book.categoryName}</span>
        <h4 class="book-card-title">${book.title}</h4>
        <div class="book-card-author">${book.author}</div>
        
        <div class="book-rating-row">
          <div class="book-stars">${generateStarsHtml(book.rating)}</div>
          <span class="rating-score">${book.rating}</span>
          <span class="reviews-count">(${book.reviewsCount} تقييم)</span>
        </div>

        <p class="book-card-snippet">${book.shortDesc}</p>

        <div class="book-card-footer">
          <div class="book-price-line">
            <div class="price-box">
              <span class="current-price">${book.price} ${STORE_CONFIG.currency}</span>
              <span class="original-price">${book.originalPrice} ${STORE_CONFIG.currency}</span>
            </div>
            <span class="discount-save-tag">وفر ${discountPercent}%</span>
          </div>

          <div class="book-action-buttons">
            <button type="button" class="btn-add-cart" onclick="window.cartManager.addToCart(${book.id})">
              <i class="fa-solid fa-cart-plus"></i>
              <span>أضف للسلة</span>
            </button>
            <button type="button" class="btn-quick-preview" onclick="openQuickViewModal(${book.id})" title="معاينة الفهرس والمحتوى">
              <i class="fa-regular fa-eye"></i>
            </button>
            <button type="button" class="btn-direct-wa-item" onclick="openDirectWhatsApp(${book.id})" title="طلب فوري عبر واتساب">
              <i class="fa-brands fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// تطبيق الفلاتر والفرز
function applyFilters() {
  const container = document.getElementById("books-grid-container");
  const countEl = document.getElementById("results-count-text");
  if (!container) return;

  let filtered = [...BOOKS_DATA];

  // 1. فلتر التصنيف
  if (AppState.selectedCategory !== "all") {
    filtered = filtered.filter(b => b.category === AppState.selectedCategory);
  }

  // 2. فلتر السعر الأقصى
  filtered = filtered.filter(b => b.price <= AppState.maxPrice && b.price >= AppState.minPrice);

  // 3. فلتر البحث النصي
  if (AppState.searchQuery.trim() !== "") {
    const q = AppState.searchQuery.trim().toLowerCase();
    filtered = filtered.filter(b => 
      b.title.toLowerCase().includes(q) ||
      b.englishTitle.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.categoryName.toLowerCase().includes(q)
    );
  }

  // 4. الترتيب والفرز
  if (AppState.sortBy === "popular") {
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  } else if (AppState.sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (AppState.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (AppState.sortBy === "newest") {
    filtered.sort((a, b) => b.year - a.year);
  }

  // تحديث عداد النتائج
  if (countEl) {
    countEl.textContent = `عرض ${filtered.length} من أصل ${BOOKS_DATA.length} كتاب`;
  }

  // رسم النتائج في الصفحة
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-catalog-state">
        <i class="fa-solid fa-book-bookmark"></i>
        <h3>لم نعثر على كتب مطابقة لبحثك</h3>
        <p>جرب تغيير شريط السعر، أو مسح نص البحث لاكتشاف جميع كتب الواجهات الأمامية.</p>
        <button type="button" class="btn-primary-hero" onclick="resetAllFilters()">
          <i class="fa-solid fa-rotate-left"></i>
          <span>إعادة ضبط الفلاتر</span>
        </button>
      </div>
    `;
  } else {
    container.innerHTML = filtered.map(book => createBookCardHtml(book)).join("");
  }
}

// إعادة ضبط جميع الفلاتر
function resetAllFilters() {
  AppState.selectedCategory = "all";
  AppState.searchQuery = "";
  AppState.maxPrice = 450;
  AppState.sortBy = "popular";

  const searchInputs = document.querySelectorAll(".search-input-field");
  searchInputs.forEach(input => input.value = "");

  const priceSlider = document.getElementById("price-filter-slider");
  const priceDisplay = document.getElementById("price-filter-display");
  if (priceSlider) priceSlider.value = 450;
  if (priceDisplay) priceDisplay.textContent = `450 ${STORE_CONFIG.currency}`;

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) sortSelect.value = "popular";

  const pills = document.querySelectorAll(".category-pill-btn");
  pills.forEach(p => {
    if (p.dataset.category === "all") p.classList.add("active");
    else p.classList.remove("active");
  });

  applyFilters();
  window.showToast("تمت إعادة ضبط جميع الفلاتر", "info");
}// فتح المعاينة السريعة للكتاب
function openQuickViewModal(bookId) {
  const book = BOOKS_DATA.find(b => b.id === Number(bookId));
  if (!book) return;

  const modalOverlay = document.getElementById("quick-view-modal");
  const modalBody = document.getElementById("quick-view-modal-content");
  if (!modalOverlay || !modalBody) return;

  const isWish = window.cartManager ? window.cartManager.isInWishlist(book.id) : false;
  const discountPercent = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100);

  modalBody.innerHTML = `
    <div class="quick-view-grid">
      <div class="qv-cover-side">
        <div class="qv-cover-showcase" style="background: ${book.coverGradient}">
          <i class="${book.icon}"></i>
          <h3 style="font-size: 1.3rem; font-weight: 800;">${book.title}</h3>
          <span style="font-size: 0.85rem; opacity: 0.9; margin-top: 0.5rem;">${book.englishTitle}</span>
        </div>

        <div class="qv-specs-grid">
          <div class="qv-spec-item">
            <strong>عدد الصفحات</strong>
            <span>${book.pages} صفحة</span>
          </div>
          <div class="qv-spec-item">
            <strong>سنة الإصدار</strong>
            <span>${book.year} (محدث)</span>
          </div>
          <div class="qv-spec-item">
            <strong>المستوى</strong>
            <span>${book.level}</span>
          </div>
          <div class="qv-spec-item">
            <strong>لغة الكتاب</strong>
            <span>عربي + إنجليزي</span>
          </div>
        </div>
      </div>

      <div class="qv-details-wrap">
        <span class="qv-tag">${book.categoryName} • ${book.badge}</span>
        <h2 class="qv-title">${book.title}</h2>
        <div class="qv-author">المؤلف: ${book.author}</div>

        <div class="book-rating-row" style="margin-bottom: 1rem;">
          <div class="book-stars">${generateStarsHtml(book.rating)}</div>
          <span class="rating-score">${book.rating}</span>
          <span class="reviews-count">(${book.reviewsCount} مراجعة موثقة)</span>
        </div>

        <div class="qv-price-block">
          <span class="qv-price-current">${book.price} ${STORE_CONFIG.currency}</span>
          <span class="qv-price-old">${book.originalPrice} ${STORE_CONFIG.currency}</span>
          <span class="discount-save-tag">خصم ${discountPercent}%</span>
        </div>

        <p class="qv-desc">${book.description}</p>

        <div class="qv-toc-box">
          <h5><i class="fa-solid fa-list-check text-indigo-400"></i> مقتطفات من فهرس الكتاب:</h5>
          <ul class="qv-toc-list">
            ${book.tableOfContents.map(ch => `<li><i class="fa-regular fa-circle-check text-emerald-400"></i> ${ch}</li>`).join("")}
          </ul>
        </div>

        <div class="qv-actions-row">
          <button type="button" class="btn-primary-hero" style="flex: 1; justify-content: center;" onclick="window.cartManager.addToCart(${book.id}); closeQuickViewModal();">
            <i class="fa-solid fa-cart-plus"></i>
            <span>إضافة إلى السلة (${book.price} ${STORE_CONFIG.currency})</span>
          </button>
          <button type="button" class="btn-wa-hero" onclick="openDirectWhatsApp(${book.id})">
            <i class="fa-brands fa-whatsapp"></i>
            <span>طلب فوري</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeQuickViewModal() {
  const modal = document.getElementById("quick-view-modal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

// طلب كتاب فوري عبر واتساب
function openDirectWhatsApp(bookId) {
  const url = window.cartManager.buildSingleBookWhatsAppUrl(bookId);
  window.open(url, "_blank");
}

// فتح نموذج إتمام الطلب الفوري
function openCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

// طلب الباقة الخاصة عبر واتساب
function orderSpecialBundle() {
  const text = `مرحباً مكتبة تَعلّم 📚\nأود الاستفادة من *عرض باقة احتراف الواجهات الأمامية (3 كتب بخصم 25%)* بسعر 690 ج.م بدلاً من 920 ج.م مع الشحن المجاني 🚀\nيرجى تأكيد تفاصيل الشحن. شكراً!`;
  const url = `https://wa.me/${STORE_CONFIG.whatsappInternational}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// تبديل ظهور وإخفاء سلة المشتريات
function toggleCartDrawer(open) {
  const drawer = document.getElementById("cart-drawer-overlay");
  if (!drawer) return;

  if (open) {
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
    if (window.cartManager) window.cartManager.renderCartDrawer();
  } else {
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// تهيئة جميع مستمعي الأحداث عند تحميل المستند
document.addEventListener("DOMContentLoaded", () => {
  // 1. الثيم والتصنيفات
  initTheme();
  renderCategoryPills();
  applyFilters();

  // 2. مستمع شريط السعر
  const priceSlider = document.getElementById("price-filter-slider");
  const priceDisplay = document.getElementById("price-filter-display");
  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener("input", (e) => {
      AppState.maxPrice = Number(e.target.value);
      priceDisplay.textContent = `${AppState.maxPrice} ${STORE_CONFIG.currency}`;
      applyFilters();
    });
  }

  // 3. مستمع حقل الترتيب والفرز
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.sortBy = e.target.value;
      applyFilters();
    });
  }

  // 4. مستمع حقول البحث في الهيدر
  const searchInputs = document.querySelectorAll(".search-input-field");
  searchInputs.forEach(input => {
    input.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      
      const clearBtn = input.parentElement.querySelector(".search-clear-btn");
      if (clearBtn) {
        clearBtn.style.display = AppState.searchQuery.length > 0 ? "block" : "none";
      }

      applyFilters();
    });
  });

  const clearButtons = document.querySelectorAll(".search-clear-btn");
  clearButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      searchInputs.forEach(input => input.value = "");
      AppState.searchQuery = "";
      btn.style.display = "none";
      applyFilters();
    });
  });

  // 5. زر سلة المشتريات
  const cartBtn = document.getElementById("header-cart-btn");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => toggleCartDrawer(true));
  }
  const mobileCartBtn = document.getElementById("mobile-cart-btn");
  if (mobileCartBtn) {
    mobileCartBtn.addEventListener("click", () => toggleCartDrawer(true));
  }

  const closeCartBtn = document.getElementById("cart-drawer-close-btn");
  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", () => toggleCartDrawer(false));
  }

  // إغلاق السلة عند النقر على الخلفية
  const cartOverlay = document.getElementById("cart-drawer-overlay");
  if (cartOverlay) {
    cartOverlay.addEventListener("click", (e) => {
      if (e.target === cartOverlay) toggleCartDrawer(false);
    });
  }

  // 6. زر إرسال الطلب بالواتساب مباشرة من السلة
  const waCartBtn = document.getElementById("cart-wa-checkout-btn");
  if (waCartBtn) {
    waCartBtn.addEventListener("click", () => {
      const url = window.cartManager.buildWhatsAppMessage();
      window.open(url, "_blank");
    });
  }

  // 7. نموذج إنهاء الطلب الشامل
  const checkoutForm = document.getElementById("direct-checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const customerData = {
        name: document.getElementById("checkout-name")?.value || "",
        phone: document.getElementById("checkout-phone")?.value || "",
        city: document.getElementById("checkout-city")?.value || "",
        address: document.getElementById("checkout-address")?.value || "",
        paymentMethod: document.getElementById("checkout-payment")?.value || "الدفع عند الاستلام",
        notes: document.getElementById("checkout-notes")?.value || ""
      };

      if (!customerData.name || !customerData.phone || !customerData.address) {
        window.showToast("يرجى ملء كافة الحقول الأساسية", "warning");
        return;
      }

      const url = window.cartManager.buildWhatsAppMessage(customerData);
      closeCheckoutModal();
      toggleCartDrawer(false);
      window.showToast("جاري تحويلك إلى واتساب لتأكيد الطلب الفوري 🚀", "success");
      
      setTimeout(() => {
        window.open(url, "_blank");
      }, 500);
    });
  }

  // 8. الأكورديون للأسئلة الشائعة
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(i => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    }
  });

  // 9. القائمة المنبثقة للأجهزة المحمولة
  const mobileMenuBtn = document.getElementById("mobile-menu-trigger");
  const mobileSearchBox = document.getElementById("mobile-search-section");
  if (mobileMenuBtn && mobileSearchBox) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileSearchBox.style.display = mobileSearchBox.style.display === "block" ? "none" : "block";
    });
  }
});