/**
 * True Bark Ceylon Cinnamon - E-Commerce Store Application
 * Streamlined, high-conversion architecture with video hero and quick ordering.
 */

// =============================================================================
// Product Catalog
// =============================================================================
const PRODUCTS = [
  {
    id: "true-bark-sugar-mix",
    name: "True Bark Ceylon Cinnamon Sugar Mix",
    subtitle: "5g Single-Serve Barista Sticks | Premium & Authentic Hand-Harvested",
    category: "sticks",
    categoryName: "Single-Serve Sticks",
    badge: "Barista Favorite",
    rating: 4.98,
    reviewsCount: 184,
    description: "Formulated for specialty coffee lovers. Micro-milled pure Ceylon cinnamon blended with unrefined golden cane crystals in airtight 5g single-serve packets. Melts into espresso crema, lattes, or oatmeal without astringent sediment.",
    weight: "5g per stick (Net Wt 125g / 250g)",
    coumarin: "< 0.004% (Lab Certified)",
    origin: "Southern Coast, Sri Lanka",
    image: "assets/images/sugar-mix-square.jpg",
    gallery: ["assets/images/sugar-mix-square.jpg", "assets/images/sugar-mix-sachets.jpg"],
    variants: [
      { id: "box-25", name: "Box of 25 Sticks", price: 22.00, subPrice: 18.70 },
      { id: "box-50", name: "Cafe Box of 50", price: 38.00, subPrice: 32.30 },
      { id: "sample-10", name: "10-Pack Sampler", price: 9.50, subPrice: 8.08 }
    ],
    defaultVariantIndex: 0
  },
  {
    id: "true-bark-powder-gold-tin",
    name: "True Bark Ceylon Cinnamon Powder",
    subtitle: "Standard Gold & Dark Espresso Heirloom Tin | Pure & Unadulterated",
    category: "tins",
    categoryName: "Keepsake Tins",
    badge: "Flagship Keepsake",
    rating: 4.97,
    reviewsCount: 219,
    description: "100% pure Alba & C5 grade Ceylon cinnamon stone-milled into a velvety powder. Packaged in a collector's dark espresso metal tin with polished gold lid and base, featuring embossed vintage Sri Lankan harvest lithography.",
    weight: "Net Wt 140g (5oz)",
    coumarin: "< 0.003% (Negligible)",
    origin: "Matara Estate, Sri Lanka",
    image: "assets/images/gold-tin-square.jpg",
    gallery: ["assets/images/gold-tin-square.jpg", "assets/images/cinnamon-powder-tins.jpg"],
    variants: [
      { id: "gold-tin-single", name: "Collector Gold Tin (140g)", price: 28.00, subPrice: 23.80 },
      { id: "gold-tin-duo", name: "Duo Reserve (2x 140g)", price: 52.00, subPrice: 44.20 }
    ],
    defaultVariantIndex: 0
  },
  {
    id: "true-bark-powder-brown-tin",
    name: "True Bark Ceylon Cinnamon Powder",
    subtitle: "Artisan Kraft Sample Tin | Rustic Twine Seal Edition",
    category: "tins",
    categoryName: "Keepsake Tins",
    badge: "Artisan Limited",
    rating: 4.93,
    reviewsCount: 112,
    description: "Earth-toned caramel tin with cream botanical engravings and a hand-tied artisan sample tag. The exact same stone-milled pure Ceylon cinnamon powder in a lightweight eco-matte pantry tin.",
    weight: "Net Wt 140g (5oz)",
    coumarin: "< 0.003% (Negligible)",
    origin: "Galle Region, Sri Lanka",
    image: "assets/images/brown-tin-square.jpg",
    gallery: ["assets/images/brown-tin-square.jpg", "assets/images/cinnamon-powder-tins.jpg"],
    variants: [
      { id: "brown-tin-single", name: "Sample Kraft Tin (140g)", price: 24.00, subPrice: 20.40 },
      { id: "brown-tin-refill", name: "Kraft Tin + Refill Pouch", price: 42.00, subPrice: 35.70 }
    ],
    defaultVariantIndex: 0
  },
  {
    id: "true-bark-tins-duo",
    name: "True Bark Heirloom Keepsake Tins — Twin Reserve Set",
    subtitle: "Collector Set: Standard Gold Tin + Artisan Kraft Tin (2x 140g)",
    category: "tins",
    categoryName: "Keepsake Tins",
    badge: "Collector Duo",
    rating: 5.00,
    reviewsCount: 86,
    description: "The complete heirloom tin reserve. Includes both the Standard Gold & Dark Espresso Tin (140g) and the Artisan Kraft Sample Brown Tin (140g). Pure Sri Lankan Ceylon cinnamon stone-milled for daily coffee, lattes, and gourmet baking.",
    weight: "Twin Set (Net Wt 280g / 10oz)",
    coumarin: "< 0.003% (Lab Certified)",
    origin: "Ceylon Heritage Reserve, Sri Lanka",
    image: "assets/images/both-tins-full.jpg",
    gallery: ["assets/images/both-tins-full.jpg", "assets/images/gold-tin-square.jpg", "assets/images/brown-tin-square.jpg"],
    variants: [
      { id: "twin-set", name: "Twin Reserve Duo (2x 140g)", price: 49.00, subPrice: 41.65 }
    ],
    defaultVariantIndex: 0
  }
];

// Map of currently selected variant index per product card
const cardSelectedVariants = {
  "true-bark-sugar-mix": 0,
  "true-bark-powder-gold-tin": 0,
  "true-bark-powder-brown-tin": 0,
  "true-bark-tins-duo": 0
};

// =============================================================================
// Currencies & Exchange Rates
// =============================================================================
const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0, threshold: 45.0 },
  EUR: { symbol: "€", rate: 0.92, threshold: 42.0 },
  GBP: { symbol: "£", rate: 0.78, threshold: 38.0 },
  CAD: { symbol: "CA$", rate: 1.36, threshold: 60.0 }
};

let currentCurrency = "USD";

// =============================================================================
// Application State
// =============================================================================
let cart = [];
let appliedPromo = null; // { code: 'TRUEBARK15', discountRate: 0.15, freeShip: false }
let activeFilter = "all";
let currentModalProduct = null;
let currentModalVariantIndex = 0;
let currentModalPurchasePlan = "onetime"; // 'onetime' | 'subscribe'
let selectedShippingSpeed = "standard";

// =============================================================================
// Initialization
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  initCurrencySelector();
  renderProductGrid();
  updateCartUI();
  setupDialogPolyfillFallbacks();
  setupEventListeners();
  initVideoControls();
});

// =============================================================================
// Dialog Fallbacks for closedby="any"
// =============================================================================
function setupDialogPolyfillFallbacks() {
  const dialogs = document.querySelectorAll("dialog");
  dialogs.forEach((dialog) => {
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (!isDialogContent) dialog.close();
      });
    }
  });
}

// =============================================================================
// Video Controls
// =============================================================================
function initVideoControls() {
  const video = document.getElementById("hero-video");
  const playBtn = document.getElementById("video-play-btn");
  const playIcon = document.getElementById("play-status-icon");
  const playText = document.getElementById("play-status-text");
  const muteBtn = document.getElementById("video-mute-btn");
  const muteIcon = document.getElementById("mute-status-icon");
  const muteText = document.getElementById("mute-status-text");

  if (video && playBtn) {
    playBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        if (playIcon) playIcon.innerHTML = "&#10074;&#10074;";
        if (playText) playText.textContent = "Pause Video";
      } else {
        video.pause();
        if (playIcon) playIcon.innerHTML = "&#9658;";
        if (playText) playText.textContent = "Play Video";
      }
    });
  }

  if (video && muteBtn) {
    muteBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      if (video.muted) {
        if (muteIcon) muteIcon.innerHTML = "&#128263;";
        if (muteText) muteText.textContent = "Muted";
      } else {
        if (muteIcon) muteIcon.innerHTML = "&#128266;";
        if (muteText) muteText.textContent = "Sound On";
      }
    });
  }
}

// =============================================================================
// Currency Formatting
// =============================================================================
function formatPrice(amountUSD) {
  const curr = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const converted = amountUSD * curr.rate;
  return `${curr.symbol}${converted.toFixed(2)}`;
}

function initCurrencySelector() {
  const select = document.getElementById("currency-select");
  if (!select) return;

  select.addEventListener("change", (e) => {
    currentCurrency = e.target.value;
    const curr = CURRENCIES[currentCurrency];
    const thresholdElem = document.getElementById("bar-free-ship-threshold");
    if (thresholdElem) {
      thresholdElem.textContent = `${curr.symbol}${curr.threshold.toFixed(0)}`;
    }
    renderProductGrid();
    updateCartUI();
    showToast(`Currency switched to ${currentCurrency}`);
  });
}

// =============================================================================
// Product Catalog Rendering (Streamlined with Instant Card Actions)
// =============================================================================
function renderProductGrid() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  const filtered = activeFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeFilter);

  grid.innerHTML = filtered.map((product) => {
    const selectedVIndex = cardSelectedVariants[product.id] ?? product.defaultVariantIndex;
    const activeVariant = product.variants[selectedVIndex] || product.variants[0];

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="card-media-wrap" onclick="openProductModal('${product.id}')" role="button" aria-label="Quick view ${product.name}">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="card-img" 
            loading="lazy"
            decoding="async">
          <span class="card-badge">${product.badge}</span>
          <button class="quick-view-overlay-btn" type="button">Quick View</button>
        </div>
        <div class="card-body">
          <span class="card-category">${product.categoryName}</span>
          <h3 class="card-title">${product.name}</h3>
          <div class="card-meta-row">
            <span class="card-rating">&#9733; ${product.rating.toFixed(2)}</span>
            <span>&bull;</span>
            <span>${product.reviewsCount} reviews</span>
          </div>
          <p class="card-desc">${product.description}</p>

          ${product.variants.length > 1 ? `
            <div style="margin-bottom: 12px; display: flex; flex-wrap: wrap; gap: 6px;">
              ${product.variants.map((v, idx) => `
                <button 
                  type="button" 
                  class="variant-btn-pill ${idx === selectedVIndex ? 'active-pill' : ''}" 
                  onclick="selectCardVariant('${product.id}', ${idx})"
                  style="padding: 4px 10px; font-size: 0.72rem; border-radius: 4px; border: 1px solid ${idx === selectedVIndex ? 'var(--color-espresso)' : 'var(--color-cream-border)'}; background: ${idx === selectedVIndex ? 'var(--color-espresso)' : 'var(--color-white)'}; color: ${idx === selectedVIndex ? 'var(--color-gold-bright)' : 'var(--color-text-secondary)'}; cursor: pointer; font-weight: 600;">
                  ${v.name}
                </button>
              `).join("")}
            </div>
          ` : ''}

          <div class="card-footer">
            <div class="price-container">
              <span class="card-price">${formatPrice(activeVariant.price)}</span>
              <span class="card-sub-price">Sub & Save: ${formatPrice(activeVariant.subPrice)}</span>
            </div>
            <button class="btn btn-gold btn-card-add" onclick="quickAddToCartSelected('${product.id}', 1)">
              Add to Bag
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function selectCardVariant(productId, variantIndex) {
  cardSelectedVariants[productId] = variantIndex;
  renderProductGrid();
}

function quickAddToCartSelected(productId, qty = 1) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;
  const selectedVIndex = cardSelectedVariants[productId] ?? product.defaultVariantIndex;
  const variant = product.variants[selectedVIndex] || product.variants[0];

  addToCart({
    productId: product.id,
    name: product.name,
    variantId: variant.id,
    variantName: variant.name,
    image: product.image,
    price: variant.price,
    isSubscription: false,
    quantity: qty
  });

  openCartDrawer();
}

function filterCategory(cat) {
  activeFilter = cat;
  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach((t) => {
    if (t.dataset.filter === cat) {
      t.classList.add("active");
      t.setAttribute("aria-selected", "true");
    } else {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    }
  });
  renderProductGrid();
  const target = document.getElementById("quick-order-section");
  if (target) target.scrollIntoView({ behavior: "smooth" });
}

// =============================================================================
// Quick View Modal Controller
// =============================================================================
function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  currentModalProduct = product;
  currentModalVariantIndex = cardSelectedVariants[productId] ?? 0;
  currentModalPurchasePlan = "onetime";

  const dialog = document.getElementById("product-quick-view-dialog");
  const imgElem = document.getElementById("modal-product-img");
  const badgeElem = document.getElementById("modal-product-badge");
  const catElem = document.getElementById("modal-product-category");
  const titleElem = document.getElementById("modal-product-title");
  const ratingElem = document.getElementById("modal-product-rating");
  const descElem = document.getElementById("modal-product-desc");
  const chipsContainer = document.getElementById("modal-variant-chips");
  const qtyInput = document.getElementById("modal-qty-input");

  imgElem.src = product.image;
  imgElem.alt = product.name;
  badgeElem.textContent = product.badge;
  catElem.textContent = product.categoryName;
  titleElem.textContent = product.name;
  ratingElem.textContent = `${product.rating} (${product.reviewsCount} verified reviews)`;
  descElem.textContent = product.description;
  if (qtyInput) qtyInput.value = 1;

  chipsContainer.innerHTML = product.variants.map((v, idx) => `
    <button type="button" class="variant-chip ${idx === currentModalVariantIndex ? 'active' : ''}" onclick="selectModalVariant(${idx})">
      ${v.name}
    </button>
  `).join("");

  updateModalPriceDisplays();

  const onetimeRadio = document.querySelector('input[name="purchase_plan"][value="onetime"]');
  if (onetimeRadio) onetimeRadio.checked = true;
  document.getElementById("plan-onetime").classList.add("selected");
  document.getElementById("plan-sub").classList.remove("selected");

  dialog.showModal();
}

function closeProductModal() {
  const dialog = document.getElementById("product-quick-view-dialog");
  if (dialog) dialog.close();
}

function selectModalVariant(index) {
  currentModalVariantIndex = index;
  const chips = document.querySelectorAll("#modal-variant-chips .variant-chip");
  chips.forEach((c, idx) => {
    if (idx === index) c.classList.add("active");
    else c.classList.remove("active");
  });
  updateModalPriceDisplays();
}

function handlePlanChange(plan) {
  currentModalPurchasePlan = plan;
  const onetimeWrap = document.getElementById("plan-onetime");
  const subWrap = document.getElementById("plan-sub");

  if (plan === "onetime") {
    onetimeWrap.classList.add("selected");
    subWrap.classList.remove("selected");
  } else {
    onetimeWrap.classList.remove("selected");
    subWrap.classList.add("selected");
  }
  updateModalPriceDisplays();
}

function updateModalPriceDisplays() {
  if (!currentModalProduct) return;
  const variant = currentModalProduct.variants[currentModalVariantIndex];
  const onetimePriceElem = document.getElementById("plan-onetime-price");
  const subPriceElem = document.getElementById("plan-sub-price");
  const mainPriceElem = document.getElementById("modal-product-price");
  const btnPriceElem = document.getElementById("modal-btn-price");

  onetimePriceElem.textContent = formatPrice(variant.price);
  subPriceElem.textContent = formatPrice(variant.subPrice);

  const activePrice = currentModalPurchasePlan === "subscribe" ? variant.subPrice : variant.price;
  mainPriceElem.textContent = formatPrice(activePrice);
  btnPriceElem.textContent = formatPrice(activePrice);
}

function incrementModalQty() {
  const input = document.getElementById("modal-qty-input");
  input.value = parseInt(input.value || 1) + 1;
}

function decrementModalQty() {
  const input = document.getElementById("modal-qty-input");
  const val = parseInt(input.value || 1);
  if (val > 1) input.value = val - 1;
}

function addToCartFromModal() {
  if (!currentModalProduct) return;
  const qty = parseInt(document.getElementById("modal-qty-input").value || 1);
  const variant = currentModalProduct.variants[currentModalVariantIndex];
  const isSubscription = currentModalPurchasePlan === "subscribe";

  addToCart({
    productId: currentModalProduct.id,
    name: currentModalProduct.name,
    variantId: variant.id,
    variantName: variant.name,
    image: currentModalProduct.image,
    price: isSubscription ? variant.subPrice : variant.price,
    isSubscription: isSubscription,
    quantity: qty
  });

  closeProductModal();
  openCartDrawer();
}

// =============================================================================
// Cart Logic & Persistence
// =============================================================================
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("truebark_cart");
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem("truebark_cart", JSON.stringify(cart));
  } catch (e) {}
}

function addToCart(item) {
  const existingIndex = cart.findIndex(
    (ci) => ci.productId === item.productId && ci.variantId === item.variantId && ci.isSubscription === item.isSubscription
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCartToStorage();
  updateCartUI();
  bumpCartIcon();
  showToast(`Added ${item.quantity}x ${item.name} to bag`);
}

function updateCartItemQty(index, change) {
  if (!cart[index]) return;
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCartToStorage();
  updateCartUI();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  const removed = cart.splice(index, 1)[0];
  saveCartToStorage();
  updateCartUI();
  showToast(`Removed ${removed.name} from bag`);
}

function updateCartUI() {
  const counter = document.getElementById("cart-counter");
  const drawerCount = document.getElementById("drawer-item-count");
  const itemsContainer = document.getElementById("cart-items-container");
  const emptyState = document.getElementById("cart-empty-state");
  const subtotalElem = document.getElementById("cart-subtotal");
  const totalElem = document.getElementById("cart-total");
  const freeShipText = document.getElementById("shipping-status-text");
  const freeShipFill = document.getElementById("shipping-bar-fill");
  const discountRow = document.getElementById("discount-row");
  const discountVal = document.getElementById("cart-discount");
  const discountLabel = document.getElementById("discount-code-label");

  // Sticky order bar elements
  const stickyBarItems = document.getElementById("sticky-bar-items");
  const stickyBarTotal = document.getElementById("sticky-bar-total");

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (counter) counter.textContent = totalItems;
  if (drawerCount) drawerCount.textContent = `(${totalItems} item${totalItems === 1 ? '' : 's'})`;

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (itemsContainer) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-icon">&#128722;</div>
          <p>Your bag is currently empty.</p>
          <a href="#quick-order-section" class="btn btn-gold btn-sm" onclick="closeCartDrawer()">Shop True Bark Collection</a>
        </div>
      `;
    }
    if (subtotalElem) subtotalElem.textContent = formatPrice(0);
    if (totalElem) totalElem.textContent = formatPrice(0);
    if (freeShipFill) freeShipFill.style.width = "0%";
    if (discountRow) discountRow.style.display = "none";
    if (stickyBarItems) stickyBarItems.textContent = "0 items";
    if (stickyBarTotal) stickyBarTotal.textContent = formatPrice(0);
    return;
  }

  // Render cart items
  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map((item, idx) => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-variant">${item.variantName} ${item.isSubscription ? '• Monthly (-15%)' : ''}</span>
          <span class="cart-item-price">${formatPrice(item.price)}</span>
          <div class="cart-item-actions">
            <div class="qty-stepper-sm">
              <button onclick="updateCartItemQty(${idx}, -1)" aria-label="Decrease quantity">-</button>
              <span>${item.quantity}</span>
              <button onclick="updateCartItemQty(${idx}, 1)" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item-remove-btn" onclick="removeCartItem(${idx})">Remove</button>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const curr = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const threshold = curr.threshold;
  const convertedSubtotal = subtotal * curr.rate;

  // Free shipping meter
  const progressPercent = Math.min(100, (convertedSubtotal / threshold) * 100);
  if (freeShipFill) freeShipFill.style.width = `${progressPercent}%`;

  if (convertedSubtotal >= threshold) {
    if (freeShipText) {
      freeShipText.innerHTML = `<strong>Unlocked!</strong> You qualify for <strong>Complimentary Priority Shipping</strong>!`;
    }
  } else {
    const diff = threshold - convertedSubtotal;
    if (freeShipText) {
      freeShipText.innerHTML = `Add <strong>${curr.symbol}${diff.toFixed(2)}</strong> more to unlock <strong>Complimentary Shipping</strong>!`;
    }
  }

  // Discount calculations
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountRate) {
      discountAmount = subtotal * appliedPromo.discountRate;
    }
    if (discountRow) {
      discountRow.style.display = "flex";
      discountLabel.textContent = appliedPromo.code;
      discountVal.textContent = `-${formatPrice(discountAmount)}`;
    }
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);
  if (subtotalElem) subtotalElem.textContent = formatPrice(subtotal);
  if (totalElem) totalElem.textContent = formatPrice(finalTotal);

  if (stickyBarItems) stickyBarItems.textContent = `${totalItems} item${totalItems === 1 ? '' : 's'}`;
  if (stickyBarTotal) stickyBarTotal.textContent = formatPrice(finalTotal);
}

function bumpCartIcon() {
  const counter = document.getElementById("cart-counter");
  if (counter) {
    counter.classList.add("bump");
    setTimeout(() => counter.classList.remove("bump"), 250);
  }
}

// =============================================================================
// Cart Drawer Overlay Controls
// =============================================================================
function openCartDrawer() {
  const overlay = document.getElementById("cart-drawer-overlay");
  if (overlay) {
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById("cart-drawer-overlay");
  if (overlay) {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  }
}

// =============================================================================
// Promo Code System
// =============================================================================
function applyPromoCode() {
  const input = document.getElementById("promo-code-input");
  const msg = document.getElementById("promo-message");
  if (!input || !msg) return;

  const code = input.value.trim().toUpperCase();

  if (code === "TRUEBARK15") {
    appliedPromo = { code: "TRUEBARK15", discountRate: 0.15, freeShip: false };
    msg.className = "promo-message success";
    msg.textContent = "15% off applied to your harvest order!";
  } else if (code === "FREESHIP") {
    appliedPromo = { code: "FREESHIP", discountRate: 0.0, freeShip: true };
    msg.className = "promo-message success";
    msg.textContent = "Complimentary shipping unlocked!";
  } else {
    msg.className = "promo-message error";
    msg.textContent = "Invalid discount code. Try TRUEBARK15.";
    return;
  }

  updateCartUI();
  showToast(`Coupon ${code} applied successfully!`);
}

// =============================================================================
// Checkout Simulation
// =============================================================================
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Please add items to your bag before checking out.");
    return;
  }
  closeCartDrawer();

  const dialog = document.getElementById("checkout-dialog");
  renderCheckoutSummary();
  dialog.showModal();
}

function closeCheckoutModal() {
  const dialog = document.getElementById("checkout-dialog");
  if (dialog) dialog.close();
}

function updateShippingMethod(speed) {
  selectedShippingSpeed = speed;
  renderCheckoutSummary();
}

function renderCheckoutSummary() {
  const itemsList = document.getElementById("checkout-items-list");
  const subtotalElem = document.getElementById("checkout-subtotal-val");
  const discountRow = document.getElementById("checkout-discount-row");
  const discountElem = document.getElementById("checkout-discount-val");
  const shippingElem = document.getElementById("checkout-shipping-val");
  const taxElem = document.getElementById("checkout-tax-val");
  const finalTotalElem = document.getElementById("checkout-final-total");
  const submitBtnTotal = document.getElementById("checkout-submit-total");

  if (!itemsList) return;

  itemsList.innerHTML = cart.map((item) => `
    <div class="checkout-item-preview">
      <img src="${item.image}" alt="${item.name}">
      <div class="c-title">
        ${item.name}
        <small style="display:block; color:#888;">${item.variantName} x ${item.quantity}</small>
      </div>
      <strong>${formatPrice(item.price * item.quantity)}</strong>
    </div>
  `).join("");

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  let discountAmount = 0;
  if (appliedPromo && appliedPromo.discountRate) {
    discountAmount = subtotal * appliedPromo.discountRate;
    discountRow.style.display = "flex";
    discountElem.textContent = `-${formatPrice(discountAmount)}`;
  } else {
    discountRow.style.display = "none";
  }

  const curr = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const isFreeThreshold = (subtotal * curr.rate) >= curr.threshold;
  const isPromoFree = appliedPromo && appliedPromo.freeShip;

  let shippingCostUSD = 0;
  if (selectedShippingSpeed === "express") {
    shippingCostUSD = 14.00;
  } else {
    shippingCostUSD = (isFreeThreshold || isPromoFree) ? 0.00 : 5.00;
  }

  const taxableBase = Math.max(0, subtotal - discountAmount);
  const taxUSD = taxableBase * 0.05;
  const finalUSD = taxableBase + shippingCostUSD + taxUSD;

  subtotalElem.textContent = formatPrice(subtotal);
  shippingElem.textContent = shippingCostUSD === 0 ? "FREE" : formatPrice(shippingCostUSD);
  taxElem.textContent = formatPrice(taxUSD);
  finalTotalElem.textContent = formatPrice(finalUSD);
  submitBtnTotal.textContent = formatPrice(finalUSD);
}

function fillDemoCheckout() {
  document.getElementById("checkout-email").value = "elena.sommer@specialtyroasters.com";
  document.getElementById("checkout-fname").value = "Elena";
  document.getElementById("checkout-lname").value = "Sommer";
  document.getElementById("checkout-address").value = "742 Evergreen Artisan Way, Suite 4B";
  document.getElementById("checkout-city").value = "Portland";
  document.getElementById("checkout-state").value = "OR";
  document.getElementById("checkout-zip").value = "97201";
  showToast("Demo address populated!");
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const btn = document.getElementById("submit-order-btn");
  btn.disabled = true;
  btn.innerHTML = `<span>Processing Secure Payment...</span>`;

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = `Complete Order &bull; <span id="checkout-submit-total">$0.00</span>`;
    
    const orderId = `#TB-${Math.floor(10000 + Math.random() * 90000)}`;
    const email = document.getElementById("checkout-email").value;
    const name = `${document.getElementById("checkout-fname").value} ${document.getElementById("checkout-lname").value}`;
    const address = `${document.getElementById("checkout-address").value}, ${document.getElementById("checkout-city").value}, ${document.getElementById("checkout-state").value}`;
    const finalTotalText = document.getElementById("checkout-final-total").textContent;

    const delivDate = new Date();
    delivDate.setDate(delivDate.getDate() + (selectedShippingSpeed === "express" ? 2 : 4));
    const delivStr = delivDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

    document.getElementById("receipt-order-id").textContent = orderId;
    document.getElementById("receipt-delivery-date").textContent = delivStr;
    document.getElementById("receipt-email").textContent = email;
    document.getElementById("receipt-total-paid").textContent = finalTotalText;
    document.getElementById("receipt-shipping-dest").textContent = `${name}, ${address}`;

    const receiptList = document.getElementById("receipt-items-list");
    receiptList.innerHTML = cart.map(item => `
      <div class="receipt-item-line">
        <span>${item.quantity}x ${item.name} (${item.variantName})</span>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
      </div>
    `).join("");

    cart = [];
    appliedPromo = null;
    saveCartToStorage();
    updateCartUI();

    closeCheckoutModal();
    const confDialog = document.getElementById("confirmation-dialog");
    confDialog.showModal();
    showToast("Order placed successfully!");
  }, 1200);
}

function closeConfirmationAndShop() {
  const confDialog = document.getElementById("confirmation-dialog");
  if (confDialog) confDialog.close();
  window.location.hash = "#quick-order-section";
}

function handleNewsletter(e) {
  e.preventDefault();
  const emailInput = document.getElementById("newsletter-email");
  const email = emailInput.value.trim();
  if (!email) return;

  appliedPromo = { code: "TRUEBARK15", discountRate: 0.15, freeShip: false };
  updateCartUI();
  emailInput.value = "";
  showToast("Welcome! 15% discount code TRUEBARK15 automatically applied to your bag.");
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-gold-check">&#10003;</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function setupEventListeners() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const active = nav.classList.toggle("mobile-active");
      toggle.setAttribute("aria-expanded", active);
    });
  }

  const cartTrigger = document.getElementById("cart-trigger");
  const cartClose = document.getElementById("cart-close-btn");
  const cartOverlay = document.getElementById("cart-drawer-overlay");

  if (cartTrigger) cartTrigger.addEventListener("click", openCartDrawer);
  if (cartClose) cartClose.addEventListener("click", closeCartDrawer);
  if (cartOverlay) {
    cartOverlay.addEventListener("click", (e) => {
      if (e.target === cartOverlay) closeCartDrawer();
    });
  }

  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      activeFilter = tab.dataset.filter;
      renderProductGrid();
    });
  });

  const searchTrigger = document.getElementById("search-trigger");
  const searchOverlay = document.getElementById("search-overlay");
  const searchClose = document.getElementById("search-close-btn");
  const searchInput = document.getElementById("store-search-input");

  if (searchTrigger && searchOverlay) {
    searchTrigger.addEventListener("click", () => {
      searchOverlay.hidden = !searchOverlay.hidden;
      if (!searchOverlay.hidden) searchInput.focus();
    });
  }
  if (searchClose && searchOverlay) {
    searchClose.addEventListener("click", () => {
      searchOverlay.hidden = true;
    });
  }
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        renderProductGrid();
        return;
      }
      const grid = document.getElementById("product-grid");
      const matched = PRODUCTS.filter((p) => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query)
      );
      if (matched.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px;">No spices matching "${query}". Try "Sugar Mix", "Tin", or "Quills".</div>`;
      } else {
        grid.innerHTML = matched.map((product) => {
          const defaultVariant = product.variants[product.defaultVariantIndex];
          return `
            <article class="product-card" data-product-id="${product.id}">
              <div class="card-media-wrap" onclick="openProductModal('${product.id}')">
                <img src="${product.image}" alt="${product.name}" class="card-img" loading="lazy">
                <span class="card-badge">${product.badge}</span>
                <button class="quick-view-overlay-btn" type="button">Quick View</button>
              </div>
              <div class="card-body">
                <span class="card-category">${product.categoryName}</span>
                <h3 class="card-title">${product.name}</h3>
                <p class="card-desc">${product.description}</p>
                <div class="card-footer">
                  <span class="card-price">${formatPrice(defaultVariant.price)}</span>
                  <button class="btn btn-gold btn-card-add" onclick="quickAddToCartSelected('${product.id}', 1)">Add to Bag</button>
                </div>
              </div>
            </article>
          `;
        }).join("");
      }
    });
  }
}
