/**
 * True Bark Ceylon Cinnamon - E-Commerce Store Application
 * Streamlined, high-conversion architecture with video hero and quick ordering.
 */

// =============================================================================
// Product Catalog
// =============================================================================
const PRODUCTS = [
  {
    id: "true-bark-powder-gold-tin",
    name: "Ceylon Cinnamon Powder — Gold Cylinder Tin",
    subtitle: "100g Composite Cylinder Can (73×120mm) | 245×119mm & 22×12cm Full Wrap",
    category: "tins",
    categoryName: "100g Cylinder Tins",
    badge: "Flagship 100g Can",
    rating: 4.99,
    reviewsCount: 219,
    description: "100% pure Alba & C5 grade Ceylon cinnamon stone-milled into a velvety powder. Packaged in our new 73mm × 120mm (100g / 3.5oz) gold-rimmed composite cylinder can with vintage Sri Lankan harvest lithography.",
    weight: "Net Wt 100g (3.5oz) | 73mm × 120mm Can",
    coumarin: "< 0.003% (Negligible)",
    origin: "Matara Estate, Sri Lanka",
    image: "assets/images/Cylinder_Tin_Gold_Square.jpg",
    gallery: [
      "assets/images/Cylinder_Tin_Gold_Square.jpg",
      "assets/labels/Official_Can_Label_245x119mm_Edition_A_Gold.jpg",
      "assets/labels/Label_1_CAD_Dieline_245x119mm_UHD.jpg",
      "assets/labels/Official_Tin_Label_22x12cm_Edition_A_Gold.jpg",
      "assets/labels/Label_3_Cylindrical_Tins_Mockup_UHD.jpg",
      "assets/images/gold-tin-square.jpg"
    ],
    variants: [
      { id: "gold-tin-125mm", name: "100g Cylinder Tin (73×120mm)", price: 24.00, subPrice: 20.40 },
      { id: "gold-tin-duo", name: "2-Pack Cylinder Tins (200g)", price: 44.00, subPrice: 37.40 },
      { id: "gold-tin-single", name: "Collector Squat Tin (140g)", price: 28.00, subPrice: 23.80 }
    ],
    defaultVariantIndex: 0
  },
  {
    id: "true-bark-powder-brown-tin",
    name: "Ceylon Cinnamon Powder — Artisan Kraft Cylinder Tin",
    subtitle: "100g Composite Cylinder Can (73×120mm) | Matte Caramel Kraft Edition",
    category: "tins",
    categoryName: "100g Cylinder Tins",
    badge: "Artisan Kraft Can",
    rating: 4.96,
    reviewsCount: 142,
    description: "Warm caramel Kraft composite cylinder can (73mm × 120mm, 100g / 3.5oz) with matte black lid/base rims and espresso botanical woodcut engravings. Filled with stone-milled pure Sri Lankan Ceylon cinnamon powder.",
    weight: "Net Wt 100g (3.5oz) | 73mm × 120mm Can",
    coumarin: "< 0.003% (Negligible)",
    origin: "Galle Region, Sri Lanka",
    image: "assets/images/Cylinder_Tin_Kraft_Square.jpg",
    gallery: [
      "assets/images/Cylinder_Tin_Kraft_Square.jpg",
      "assets/labels/Official_Can_Label_245x119mm_Edition_B_Kraft.jpg",
      "assets/labels/Label_2_CAD_Dieline_245x119mm_UHD.jpg",
      "assets/labels/Official_Tin_Label_22x12cm_Edition_B_Kraft.jpg",
      "assets/labels/Label_3_Cylindrical_Tins_Mockup_UHD.jpg",
      "assets/images/brown-tin-square.jpg"
    ],
    variants: [
      { id: "brown-tin-125mm", name: "100g Kraft Cylinder (73×120mm)", price: 22.00, subPrice: 18.70 },
      { id: "brown-tin-refill", name: "2-Pack Kraft Cylinders (200g)", price: 40.00, subPrice: 34.00 },
      { id: "brown-tin-single", name: "Sample Squat Tin (140g)", price: 24.00, subPrice: 20.40 }
    ],
    defaultVariantIndex: 0
  },
  {
    id: "true-bark-tins-duo",
    name: "100g Cylinder Tins — Twin Reserve Duo",
    subtitle: "Gold-Rim Dark Espresso Can + Black-Rim Artisan Kraft Can (2x 100g / 73×120mm)",
    category: "tins",
    categoryName: "100g Cylinder Tins",
    badge: "Twin Cylinder Set",
    rating: 5.00,
    reviewsCount: 98,
    description: "The complete 100g cylinder tin reserve. Includes both the Gold-Rimmed Dark Espresso Cylinder Can and the Black-Rimmed Artisan Kraft Cylinder Can (73mm × 120mm composite cans).",
    weight: "Twin Set: 2x 100g (200g Total) | 73×120mm Cans",
    coumarin: "< 0.003% (Lab Certified)",
    origin: "Ceylon Heritage Reserve, Sri Lanka",
    image: "assets/images/Cylinder_Tins_Duo_Square.jpg",
    gallery: [
      "assets/images/Cylinder_Tins_Duo_Square.jpg",
      "assets/labels/Label_3_Cylindrical_Tins_Mockup_UHD.jpg",
      "assets/labels/Supplier_Tin_Complete_Spec_Sheet_UHD.jpg",
      "assets/labels/Label_1_CAD_Dieline_245x119mm_UHD.jpg",
      "assets/labels/Label_2_CAD_Dieline_245x119mm_UHD.jpg"
    ],
    variants: [
      { id: "tall-125mm-set", name: "Twin 100g Cylinder Duo (2x 100g)", price: 42.00, subPrice: 35.70 },
      { id: "twin-set", name: "Collector Squat Duo (2x 140g)", price: 49.00, subPrice: 41.65 }
    ],
    defaultVariantIndex: 0
  },
  {
    id: "true-bark-cinnamon-pouch-100g",
    name: "Ceylon Cinnamon Powder — 100g Window Pouch & Jar",
    subtitle: "100g Stand-Up Pouch (15×24×3cm) | Unified Heritage Tin-Style Front (8×12cm) & Rear (10×14cm) Labels",
    category: "pouches",
    categoryName: "Ceylon Cinnamon Pouches",
    badge: "100g Pouch & Jar",
    rating: 4.99,
    reviewsCount: 164,
    description: "100% pure Sri Lankan Alba & C5 Ceylon cinnamon stone-milled into a fine, aromatic powder. Packaged in our 15cm × 24cm × 3cm (100g / 3.5oz) matte stand-up window pouch featuring the exact Sri Lankan heritage lithography as our 100g Cylinder Tins (8×12cm front & 10×14cm rear stickers).",
    weight: "Net Wt 100g (3.5oz) | 15×24×3cm Pouch",
    coumarin: "< 0.004% (Lab Certified)",
    origin: "Matara & Galle Highlands, Sri Lanka",
    image: "assets/images/Ceylon_Cinnamon_Pouch_100g_Square.jpg",
    gallery: [
      "assets/images/Ceylon_Cinnamon_Pouch_100g_Square.jpg",
      "assets/images/Ceylon_Cinnamon_Pouch_100g_Gold_Square.jpg",
      "assets/labels/Official_Front_Sticker_8x12cm_Ceylon_Cinnamon_100g.jpg",
      "assets/labels/Official_Behind_Sticker_10x14cm_Ceylon_Cinnamon_100g.jpg",
      "assets/labels/Official_Front_Sticker_8x12cm_Ceylon_Cinnamon_Gold.jpg",
      "assets/labels/Official_Behind_Sticker_10x14cm_Ceylon_Cinnamon_Gold.jpg",
      "assets/labels/Flat_Pouch_Label_Ceylon_Cinnamon_100g_UHD.jpg",
      "assets/labels/Back_Pouch_Label_Ceylon_Cinnamon_100g_UHD.jpg"
    ],
    variants: [
      { id: "cinnamon-pouch-100g", name: "100g Window Pouch — Artisan Kraft (15×24×3cm)", price: 18.00, subPrice: 15.30 },
      { id: "cinnamon-pouch-100g-gold", name: "100g Window Pouch — Dark Gold Edition (15×24×3cm)", price: 18.00, subPrice: 15.30 },
      { id: "cinnamon-pouch-jar-bundle", name: "100g Pouch + Shaker Jar Duo", price: 30.00, subPrice: 25.50 },
      { id: "cinnamon-pouch-200g", name: "2-Pack 100g Pouches (200g)", price: 32.00, subPrice: 27.20 }
    ],
    defaultVariantIndex: 0
  },
  {
    id: "true-bark-cinnamon-pouch-50g",
    name: "Ceylon Cinnamon Powder — 50g Window Pouch",
    subtitle: "50g Stand-Up Pouch (12×20×2cm) | Unified Heritage Tin-Style Front (8×12cm) & Rear (10×14cm) Labels",
    category: "pouches",
    categoryName: "Ceylon Cinnamon Pouches",
    badge: "50g Window Pouch",
    rating: 4.98,
    reviewsCount: 118,
    description: "Single-origin Sri Lankan Ceylon cinnamon powder sealed in an airtight 12cm × 20cm × 2cm (50g / 1.76oz) resealable stand-up window pouch with our signature Sri Lankan heritage woodcut label design. Ideal for daily espresso lattes, baking, or refilling your True Bark Cylinder Tin.",
    weight: "Net Wt 50g (1.76oz) | 12×20×2cm Pouch",
    coumarin: "< 0.004% (Lab Certified)",
    origin: "Southern Coast, Sri Lanka",
    image: "assets/images/Ceylon_Cinnamon_Pouch_50g_Square.jpg",
    gallery: [
      "assets/images/Ceylon_Cinnamon_Pouch_50g_Square.jpg",
      "assets/images/Ceylon_Cinnamon_Pouch_50g_Gold_Square.jpg",
      "assets/labels/Official_Front_Sticker_8x12cm_Ceylon_Cinnamon_50g.jpg",
      "assets/labels/Official_Behind_Sticker_10x14cm_Ceylon_Cinnamon_50g.jpg",
      "assets/labels/Official_Front_Sticker_8x12cm_Ceylon_Cinnamon_50g_Gold.jpg",
      "assets/labels/Official_Behind_Sticker_10x14cm_Ceylon_Cinnamon_50g_Gold.jpg",
      "assets/labels/Flat_Pouch_Label_Ceylon_Cinnamon_50g_UHD.jpg",
      "assets/labels/Back_Pouch_Label_Ceylon_Cinnamon_50g_UHD.jpg"
    ],
    variants: [
      { id: "cinnamon-pouch-50g", name: "50g Window Pouch — Artisan Kraft (12×20×2cm)", price: 12.00, subPrice: 10.20 },
      { id: "cinnamon-pouch-50g-gold", name: "50g Window Pouch — Dark Gold Edition (12×20×2cm)", price: 12.00, subPrice: 10.20 },
      { id: "cinnamon-pouch-50g-3pack", name: "3-Pack 50g Pouches (150g)", price: 32.00, subPrice: 27.20 }
    ],
    defaultVariantIndex: 0
  },
  {
    id: "true-bark-sugar-mix",
    name: "Ceylon Cinnamon — 5g Barista Sticks",
    subtitle: "5g Single-Serve Barista Sticks | Premium & Authentic Hand-Harvested",
    category: "sticks",
    categoryName: "Single-Serve Sticks",
    badge: "Barista Favorite",
    rating: 4.98,
    reviewsCount: 184,
    description: "Formulated for specialty coffee lovers. Micro-milled pure Ceylon cinnamon in airtight 5g single-serve packets. Melts into espresso crema, lattes, or oatmeal without astringent sediment.",
    weight: "5g per stick (Net Wt 125g / 250g)",
    coumarin: "< 0.004% (Lab Certified)",
    origin: "Southern Coast, Sri Lanka",
    image: "assets/images/sugar-mix-square.jpg",
    gallery: [
      "assets/images/sugar-mix-square.jpg",
      "assets/images/cinnamon-stick-detail.jpg",
      "assets/images/sachet-supplier-ortho.jpg",
      "assets/images/story-05-barista-crema-science.jpg",
      "assets/images/story-03-dawn-peeling-craft.jpg",
      "assets/images/story-06-coumarin-wellness.jpg",
      "assets/images/sugar-mix-sachets.jpg"
    ],
    variants: [
      { id: "box-25", name: "Box of 25 Sticks", price: 22.00, subPrice: 18.70 },
      { id: "box-50", name: "Cafe Box of 50", price: 38.00, subPrice: 32.30 },
      { id: "sample-10", name: "10-Pack Sampler", price: 9.50, subPrice: 8.08 }
    ],
    defaultVariantIndex: 0
  }
];

// Map of currently selected variant index per product card
const cardSelectedVariants = {
  "true-bark-powder-gold-tin": 0,
  "true-bark-powder-brown-tin": 0,
  "true-bark-tins-duo": 0,
  "true-bark-cinnamon-pouch-100g": 0,
  "true-bark-cinnamon-pouch-50g": 0,
  "true-bark-sugar-mix": 0
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
          <p class="card-subtitle"><em>${product.subtitle.split('|')[0].trim()}</em></p>
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
  const subElem = document.getElementById("modal-product-subtitle");
  const ratingElem = document.getElementById("modal-product-rating");
  const descElem = document.getElementById("modal-product-desc");
  const chipsContainer = document.getElementById("modal-variant-chips");
  const qtyInput = document.getElementById("modal-qty-input");

  imgElem.src = product.image;
  imgElem.alt = product.name;
  badgeElem.textContent = product.badge;
  catElem.textContent = product.categoryName;
  titleElem.textContent = product.name;
  if (subElem) subElem.textContent = product.subtitle;
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
  // Render gallery thumbnails
  const thumbsContainer = document.getElementById("modal-thumbnails");
  if (thumbsContainer && product.gallery && product.gallery.length > 1) {
    thumbsContainer.innerHTML = product.gallery.map((imgSrc, idx) => `
      <button type="button" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="setModalMainImg('${imgSrc}', this)" aria-label="View photo ${idx + 1}">
        <img src="${imgSrc}" alt="${product.name} photo ${idx + 1}" loading="lazy">
      </button>
    `).join("");
    thumbsContainer.style.display = "flex";
  } else if (thumbsContainer) {
    thumbsContainer.style.display = "none";
  }

  dialog.showModal();
}

function setModalMainImg(src, btnElem) {
  const imgElem = document.getElementById("modal-product-img");
  if (imgElem) imgElem.src = src;
  document.querySelectorAll(".modal-thumb-btn").forEach(b => b.classList.remove("active"));
  if (btnElem) btnElem.classList.add("active");
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
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px;">No spices matching "${query}". Try "Cinnamon Sticks", "Tin", or "Powder".</div>`;
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

// =============================================================================
// True Bark Field Journal / Story Showcase Controller
// =============================================================================
let currentStoryIndex = 0;
const totalStoryChapters = 6;

function selectStoryChapter(idx) {
  currentStoryIndex = idx;
  const tabs = document.querySelectorAll(".story-chapter-tab");
  const panels = document.querySelectorAll(".story-slide-panel");
  const dots = document.querySelectorAll("#story-slider-dots .dot, .slider-dots .dot");

  tabs.forEach((tab, i) => {
    const isActive = i === idx;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  panels.forEach((panel, i) => {
    panel.classList.toggle("active", i === idx);
  });

  dots.forEach((dot, i) => {
    const isActive = i === idx;
    dot.classList.toggle("active", isActive);
    dot.setAttribute("aria-current", isActive ? "step" : "false");
  });
}

function nextStoryChapter() {
  selectStoryChapter((currentStoryIndex + 1) % totalStoryChapters);
}

function prevStoryChapter() {
  selectStoryChapter((currentStoryIndex - 1 + totalStoryChapters) % totalStoryChapters);
}
