/**
 * Vattaparambil Gold & Diamonds (VP Jewellery)
 * Core Application Logic, Product Rendering & Redirect Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.VP_CONFIG || {};

  // 1. Populate Live Gold Rate Ticker from Config
  const rate22kEl = document.getElementById('ticker-rate-22k');
  const rate24kEl = document.getElementById('ticker-rate-24k');
  const hallmarkStandardEl = document.getElementById('ticker-standard');

  if (rate22kEl && config.goldRates?.rate22k) {
    rate22kEl.textContent = config.goldRates.rate22k;
  }
  if (rate24kEl && config.goldRates?.rate24k) {
    rate24kEl.textContent = config.goldRates.rate24k;
  }
  if (hallmarkStandardEl && config.goldRates?.hallmarkStandard) {
    hallmarkStandardEl.textContent = config.goldRates.hallmarkStandard;
  }

  // 2. Render Product Cards & Handle Switchable Collection Bar (Gold, Diamond, Silver, All)
  const productContainer = document.getElementById('product-grid-container');
  const collectionTabs = document.querySelectorAll('.collection-switch-tab');

  function renderProductCards(products, filter = 'gold') {
    if (!productContainer) return;

    productContainer.innerHTML = '';
    const filtered = filter === 'all'
      ? products
      : products.filter(p => p.category === filter);

    if (filtered.length === 0) {
      productContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: var(--color-text-muted); padding: var(--space-6);">
          <p>No pieces found in this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card reveal-on-scroll is-revealed';
      card.id = `product-${product.id}`;

      card.innerHTML = `
        <div class="product-card__media-wrapper">
          <img 
            src="${product.image}" 
            alt="${product.name} - Vattaparambil Gold & Diamonds" 
            class="product-card__image" 
            loading="lazy"
            onerror="this.src='assets/images/hero_jewelry.jpg'"
          />
          <span class="product-card__badge">${product.purity}</span>
        </div>
        <div class="product-card__content">
          <span class="product-card__category">${product.collection}</span>
          <h3 class="product-card__title">${product.name}</h3>
          <p class="product-card__desc">${product.description}</p>
          <div class="product-card__footer">
            <button 
              type="button" 
              class="btn btn-primary btn-sm js-shop-btn" 
              data-product-id="${product.id}"
              data-product-name="${product.name}"
              aria-label="Shop ${product.name} in App"
            >
              Shop Piece →
            </button>
          </div>
        </div>
      `;

      productContainer.appendChild(card);
    });

    // Reattach listeners to newly created card buttons
    attachRedirectListeners();
  }

  function setCollectionTab(filterValue) {
    collectionTabs.forEach(tab => {
      const isMatch = tab.getAttribute('data-filter') === filterValue;
      tab.classList.toggle('is-active', isMatch);
      tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    renderProductCards(config.products || [], filterValue);
  }

  collectionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filterValue = tab.getAttribute('data-filter') || 'all';
      setCollectionTab(filterValue);
    });
  });

  // Initial render (defaulting to Gold collection)
  if (productContainer && Array.isArray(config.products)) {
    renderProductCards(config.products, 'gold');
  }

  // 3. Centralized Redirect Handlers for Shop, Concierge and Gold Scheme Buttons
  function attachRedirectListeners() {
    // Product & Collection "Shop / Inquiry" buttons
    document.querySelectorAll('.js-shop-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productName = btn.getAttribute('data-product-name') || 'Jewellery';
        const targetUrl = config.links?.shopRedirectUrl || config.links?.instagramUrl;
        
        console.log(`[VP Jewellery] Redirecting for product: ${productName} -> ${targetUrl}`);
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      });
    });

    // "Join Gold Scheme" buttons
    document.querySelectorAll('.js-scheme-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = config.links?.schemeRedirectUrl || config.links?.instagramUrl;
        
        console.log(`[VP Jewellery] Redirecting to Gold Scheme -> ${targetUrl}`);
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      });
    });

    // General "Explore App / Download" buttons
    document.querySelectorAll('.js-app-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = config.links?.instagramUrl || config.links?.shopRedirectUrl;
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      });
    });
  }

  attachRedirectListeners();

  // 4. Update Dynamic Year in Footer
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = config.brand?.copyrightYear || new Date().getFullYear();
  }
});
