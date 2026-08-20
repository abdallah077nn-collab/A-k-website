/**
 * مكتبة تعلّم - إدارة سلة المشتريات والمفضلة والربط مع واتساب 01018923524
 */

class CartManager {
  constructor() {
    this.CART_KEY = "taalam_cart_v1";
    this.WISHLIST_KEY = "taalam_wishlist_v1";
    this.PROMO_KEY = "taalam_promo_v1";

    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.appliedPromo = this.loadPromo();

    this.initEventListeners();
    this.updateBadges();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(this.CART_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.cart));
    this.updateBadges();
    this.renderCartDrawer();
  }

  loadWishlist() {
    try {
      const data = localStorage.getItem(this.WISHLIST_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    localStorage.setItem(this.WISHLIST_KEY, JSON.stringify(this.wishlist));
    this.updateBadges();
  }

  loadPromo() {
    try {
      const code = localStorage.getItem(this.PROMO_KEY);
      return (code && PROMO_CODES[code]) ? code : null;
    } catch (e) {
      return null;
    }
  }

  savePromo(code) {
    if (code && PROMO_CODES[code]) {
      this.appliedPromo = code;
      localStorage.setItem(this.PROMO_KEY, code);
    } else {
      this.appliedPromo = null;
      localStorage.removeItem(this.PROMO_KEY);
    }
    this.renderCartDrawer();
  }

  addToCart(bookId, quantity = 1, notify = true) {
    const book = BOOKS_DATA.find(b => b.id === Number(bookId));
    if (!book) return false;

    const existingIndex = this.cart.findIndex(item => item.id === Number(bookId));
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: book.id,
        title: book.title,
        price: book.price,
        originalPrice: book.originalPrice,
        coverGradient: book.coverGradient,
        icon: book.icon,
        categoryName: book.categoryName,
        quantity: quantity
      });
    }

    this.saveCart();

    if (notify && window.showToast) {
      window.showToast(`تمت إضافة "${book.title}" إلى سلة المشتريات 📚`, "success");
    }

    // إطلاق تأثير اهتزاز لأيقونة السلة
    const cartBtn = document.getElementById("header-cart-btn");
    if (cartBtn) {
      cartBtn.classList.add("cart-bounce");
      setTimeout(() => cartBtn.classList.remove("cart-bounce"), 600);
    }

    return true;
  }

  removeFromCart(bookId, notify = true) {
    const item = this.cart.find(i => i.id === Number(bookId));
    this.cart = this.cart.filter(item => item.id !== Number(bookId));
    this.saveCart();

    if (notify && item && window.showToast) {
      window.showToast(`تم حذف "${item.title}" من السلة`, "info");
    }
  }

  updateQuantity(bookId, delta) {
    const item = this.cart.find(i => i.id === Number(bookId));
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(bookId, false);
    } else {
      this.saveCart();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    if (window.showToast) {
      window.showToast("تم إفراغ سلة المشتريات", "info");
    }
  }

  toggleWishlist(bookId) {
    const id = Number(bookId);
    const book = BOOKS_DATA.find(b => b.id === id);
    if (!book) return false;

    const index = this.wishlist.indexOf(id);
    let isAdded = false;

    if (index > -1) {
      this.wishlist.splice(index, 1);
      if (window.showToast) {
        window.showToast(`تم إزالة "${book.title}" من المفضلة`, "info");
      }
    } else {
      this.wishlist.push(id);
      isAdded = true;
      if (window.showToast) {
        window.showToast(`تمت إضافة "${book.title}" للمفضلة ❤️`, "success");
      }
    }

    this.saveWishlist();
    this.updateWishlistButtons();
    return isAdded;
  }

  isInWishlist(bookId) {
    return this.wishlist.includes(Number(bookId));
  }

  getCalculations() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let discount = 0;
    let promoInfo = null;

    if (this.appliedPromo && PROMO_CODES[this.appliedPromo]) {
      promoInfo = PROMO_CODES[this.appliedPromo];
      discount = Math.round((subtotal * promoInfo.discountPercent) / 100);
    }

    const shipping = subtotal === 0 ? 0 : (subtotal >= STORE_CONFIG.freeShippingThreshold ? 0 : STORE_CONFIG.shippingFlatRate);
    const total = Math.max(0, subtotal - discount + shipping);

    return {
      totalItems,
      subtotal,
      discount,
      promoInfo,
      promoCode: this.appliedPromo,
      shipping,
      isFreeShipping: subtotal >= STORE_CONFIG.freeShippingThreshold && subtotal > 0,
      freeShippingRemaining: Math.max(0, STORE_CONFIG.freeShippingThreshold - subtotal),
      total
    };
  }

  updateBadges() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const wishlistCount = this.wishlist.length;

    const cartBadge = document.getElementById("cart-count-badge");
    const mobileCartBadge = document.getElementById("mobile-cart-badge");
    const wishlistBadge = document.getElementById("wishlist-count-badge");

    if (cartBadge) {
      cartBadge.textContent = totalItems;
      cartBadge.style.display = totalItems > 0 ? "inline-flex" : "none";
    }
    if (mobileCartBadge) {
      mobileCartBadge.textContent = totalItems;
      mobileCartBadge.style.display = totalItems > 0 ? "inline-flex" : "none";
    }
    if (wishlistBadge) {
      wishlistBadge.textContent = wishlistCount;
      wishlistBadge.style.display = wishlistCount > 0 ? "inline-flex" : "none";
    }
  }

  updateWishlistButtons() {
    document.querySelectorAll(".wishlist-toggle-btn").forEach(btn => {
      const bookId = Number(btn.dataset.bookId);
      if (this.isInWishlist(bookId)) {
        btn.classList.add("active");
        btn.innerHTML = '<i class="fa-solid fa-heart text-rose-500"></i>';
      } else {
        btn.classList.remove("active");
        btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      }
    });
  }

  renderCartDrawer() {
    const container = document.getElementById("cart-drawer-items");
    const emptyState = document.getElementById("cart-drawer-empty");
    const summaryContainer = document.getElementById("cart-drawer-summary");
    const checkoutBtn = document.getElementById("cart-checkout-btn");

    if (!container) return;

    const calcs = this.getCalculations();

    if (this.cart.length === 0) {
      container.innerHTML = "";
      if (emptyState) emptyState.style.display = "flex";
      if (summaryContainer) summaryContainer.style.display = "none";
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    }

    if (emptyState) emptyState.style.display = "none";
    if (summaryContainer) summaryContainer.style.display = "block";
    if (checkoutBtn) checkoutBtn.disabled = false;

    let itemsHtml = "";
    this.cart.forEach(item => {
      itemsHtml += `
        <div class="cart-item-row" data-book-id="${item.id}">
          <div class="cart-item-cover" style="background: ${item.coverGradient}">
            <i class="${item.icon}"></i>
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <span class="cart-item-cat">${item.categoryName}</span>
            <div class="cart-item-price-unit">${item.price} ${STORE_CONFIG.currency}</div>
          </div>
          <div class="cart-item-actions">
            <div class="quantity-controller">
              <button type="button" class="qty-btn" onclick="window.cartManager.updateQuantity(${item.id}, -1)" title="تقليل الكمية">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="qty-val">${item.quantity}</span>
              <button type="button" class="qty-btn" onclick="window.cartManager.updateQuantity(${item.id}, 1)" title="زيادة الكمية">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <button type="button" class="cart-remove-item-btn" onclick="window.cartManager.removeFromCart(${item.id})" title="حذف من السلة">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = itemsHtml;

    // تحديث ملخص السلة
    const subtotalEl = document.getElementById("cart-summary-subtotal");
    const discountRow = document.getElementById("cart-summary-discount-row");
    const discountEl = document.getElementById("cart-summary-discount");
    const discountLabel = document.getElementById("cart-summary-discount-label");
    const shippingEl = document.getElementById("cart-summary-shipping");
    const totalEl = document.getElementById("cart-summary-total");
    const freeShippingNotice = document.getElementById("free-shipping-progress-box");

    if (subtotalEl) subtotalEl.textContent = `${calcs.subtotal} ${STORE_CONFIG.currency}`;
    
    if (discountRow && discountEl) {
      if (calcs.discount > 0) {
        discountRow.style.display = "flex";
        discountEl.textContent = `-${calcs.discount} ${STORE_CONFIG.currency}`;
        if (discountLabel) discountLabel.textContent = `خصم كود (${calcs.promoCode})`;
      } else {
        discountRow.style.display = "none";
      }
    }

    if (shippingEl) {
      if (calcs.isFreeShipping) {
        shippingEl.innerHTML = '<span class="text-emerald-400 font-bold">شحن مجاني 🎉</span>';
      } else {
        shippingEl.textContent = `${calcs.shipping} ${STORE_CONFIG.currency}`;
      }
    }

    if (totalEl) totalEl.textContent = `${calcs.total} ${STORE_CONFIG.currency}`;

    // شريط الشحن المجاني
    if (freeShippingNotice) {
      if (calcs.isFreeShipping) {
        freeShippingNotice.innerHTML = `
          <div class="free-shipping-badge achieved">
            <i class="fa-solid fa-circle-check"></i>
            <span>مبروك! لقد حصلت على شحن مجاني لطلبك 🚚✨</span>
          </div>
        `;
      } else {
        const percent = Math.min(100, Math.round((calcs.subtotal / STORE_CONFIG.freeShippingThreshold) * 100));
        freeShippingNotice.innerHTML = `
          <div class="free-shipping-bar-wrap">
            <div class="free-shipping-text">
              <span>أضف كتب بقيمة <strong>${calcs.freeShippingRemaining} ${STORE_CONFIG.currency}</strong> لتحصل على <strong>شحن مجاني</strong>!</span>
              <span class="fs-percent">${percent}%</span>
            </div>
            <div class="fs-progress-track">
              <div class="fs-progress-fill" style="width: ${percent}%"></div>
            </div>
          </div>
        `;
      }
    }

    // عرض الكوبون المطبق
    const promoActiveTag = document.getElementById("applied-promo-tag");
    const promoInputWrap = document.getElementById("promo-input-group");
    if (promoActiveTag && promoInputWrap) {
      if (calcs.promoCode) {
        promoActiveTag.innerHTML = `
          <span class="promo-pill">
            <i class="fa-solid fa-tag"></i> ${calcs.promoCode} (${calcs.promoInfo.discountPercent}% خصم)
            <button type="button" onclick="window.cartManager.savePromo(null)" title="إزالة الكود">&times;</button>
          </span>
        `;
        promoActiveTag.style.display = "block";
      } else {
        promoActiveTag.style.display = "none";
      }
    }
  }

  buildWhatsAppMessage(customerData = {}) {
    const calcs = this.getCalculations();
    const storeNumber = STORE_CONFIG.whatsappInternational;

    let text = `مرحباً مكتبة تَعلّم 📚✨\n`;
    text += `أريد تأكيد طلب شراء جديد من الموقع الإلكتروني:\n`;
    text += `═══════════════════════\n`;

    if (customerData.name) {
      text += `👤 *بيانات العميل المستلم:*\n`;
      text += `• الاسم: ${customerData.name}\n`;
      text += `• الهاتف: ${customerData.phone || customerData.altPhone || "مرفق بالرسالة"}\n`;
      text += `• المحافظة / العنوان: ${customerData.city || ""} - ${customerData.address || "يرجى التنسيق معي"}\n`;
      text += `• طريقة الدفع: ${customerData.paymentMethod || "الدفع عند الاستلام"}\n`;
      if (customerData.notes) {
        text += `• ملاحظات إضافية: ${customerData.notes}\n`;
      }
      text += `═══════════════════════\n`;
    }

    text += `🛒 *الكتب المطلوبة (${calcs.totalItems} كتاب):*\n`;
    this.cart.forEach((item, index) => {
      const itemSubtotal = item.price * item.quantity;
      text += `${index + 1}. كتاب: *${item.title}*\n`;
      text += `   - الكمية: ${item.quantity} × ${item.price} ${STORE_CONFIG.currency} = ${itemSubtotal} ${STORE_CONFIG.currency}\n`;
    });

    text += `═══════════════════════\n`;
    text += `💵 *المجموع الفرعي:* ${calcs.subtotal} ${STORE_CONFIG.currency}\n`;

    if (calcs.discount > 0) {
      text += `🏷️ *الخصم المطبق (${calcs.promoCode}):* -${calcs.discount} ${STORE_CONFIG.currency}\n`;
    }

    if (calcs.isFreeShipping) {
      text += `🚚 *مصاريف الشحن:* مجاناً (عرض ترويجي)\n`;
    } else {
      text += `🚚 *مصاريف الشحن:* ${calcs.shipping} ${STORE_CONFIG.currency}\n`;
    }

    text += `⭐ *الإجمالي النهائي المطلوب:* ${calcs.total} ${STORE_CONFIG.currency}\n`;
    text += `═══════════════════════\n`;
    text += `📅 تم إنشاء الطلب عبر متجر مكتبة تعلم.\n`;
    text += `برجاء تأكيد الطلب وتحديد موعد الشحن. شكراً لكم! 🚀`;

    return `https://wa.me/${storeNumber}?text=${encodeURIComponent(text)}`;
  }

  buildSingleBookWhatsAppUrl(bookId, customerNote = "") {
    const book = BOOKS_DATA.find(b => b.id === Number(bookId));
    if (!book) return `https://wa.me/${STORE_CONFIG.whatsappInternational}`;

    let text = `مرحباً مكتبة تَعلّم 📚\n`;
    text += `أود طلب كتاب: *"${book.title}"*\n`;
    text += `• السعر: ${book.price} ${STORE_CONFIG.currency} (بدلاً من ${book.originalPrice} ${STORE_CONFIG.currency})\n`;
    text += `• المؤلف: ${book.author}\n`;
    text += `• المستوى: ${book.level}\n`;
    if (customerNote) {
      text += `• استفسار/ملاحظة: ${customerNote}\n`;
    }
    text += `\nبرجاء تأكيد التوافر وتفاصيل الشحن. شكراً لكم!`;

    return `https://wa.me/${STORE_CONFIG.whatsappInternational}?text=${encodeURIComponent(text)}`;
  }

  initEventListeners() {
    // كود الخصم
    document.addEventListener("submit", (e) => {
      if (e.target && e.target.id === "promo-form") {
        e.preventDefault();
        const input = document.getElementById("promo-code-input");
        if (!input) return;
        const code = input.value.trim().toUpperCase();

        if (!code) {
          if (window.showToast) window.showToast("يرجى إدخال كود الخصم", "warning");
          return;
        }

        if (PROMO_CODES[code]) {
          this.savePromo(code);
          input.value = "";
          if (window.showToast) {
            window.showToast(`مبروك! تم تفعيل ${PROMO_CODES[code].label} 🏷️`, "success");
          }
        } else {
          if (window.showToast) {
            window.showToast("عذراً، كود الخصم غير صالح أو منتهي الصلاحية", "error");
          }
        }
      }
    });
  }
}

// إنشاء النسخة العامة من مدير السلة
window.cartManager = new CartManager();