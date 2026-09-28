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

  // 2. Render Product Cards Dynamically with Safe Fallbacks
  const productContainer = document.getElementById('product-grid-container');
  if (productContainer && Array.isArray(config.products)) {
    renderProductCards(config.products, 'all');
  }

  function renderProductCards(products, filter = 'all') {
    if (!productContainer) return;
    
    productContainer.innerHTML = '';
    const filtered = filter === 'all' 
      ? products 
      : products.filter(p => p.category === filter);

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
              Shop →
            </button>
          </div>
        </div>
      `;

      productContainer.appendChild(card);
    });

    // Reattach redirect event listeners
    attachRedirectListeners();
  }

  // 3. Category Filter Tabs & Spotlight Card Interaction
  const filterButtons = document.querySelectorAll('.filter-btn');
  const spotlightCards = document.querySelectorAll('.collection-spotlight-card');

  function setCategoryFilter(filterValue) {
    // Update Filter Buttons active state
    filterButtons.forEach(btn => {
      if (btn.getAttribute('data-filter') === filterValue) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });

    // Update Spotlight Cards active state
    spotlightCards.forEach(card => {
      if (card.getAttribute('data-filter') === filterValue) {
        card.classList.add('is-active');
      } else {
        card.classList.remove('is-active');
      }
    });

    // Re-render matching products
    renderProductCards(config.products || [], filterValue);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter') || 'all';
      setCategoryFilter(filterValue);
    });
  });

  spotlightCards.forEach(card => {
    const handleSpotlightSelect = (e) => {
      e.preventDefault();
      const filterValue = card.getAttribute('data-filter') || 'all';
      setCategoryFilter(filterValue);
      
      // Scroll to product grid container smoothly if below viewport
      const targetGrid = document.getElementById('product-grid-container');
      if (targetGrid) {
        targetGrid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    };

    card.addEventListener('click', handleSpotlightSelect);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleSpotlightSelect(e);
      }
    });
  });

  // 4. Centralized Redirect Handlers for Shop and Gold Scheme Buttons
  function attachRedirectListeners() {
    // Product "Shop" buttons
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

  // 5. Update Dynamic Year in Footer
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = config.brand?.copyrightYear || new Date().getFullYear();
  }
});
