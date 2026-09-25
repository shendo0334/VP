/**
 * Vattaparambil Gold & Diamonds (VP Jewellery)
 * Central Configuration & External Redirect Links
 */

const VP_CONFIG = {
  brand: {
    fullName: "Vattaparambil Gold and Diamonds",
    shortName: "VP Jewellery",
    tagline: "Crafted for Those Who Savor",
    subTagline: "Heritage Craftsmanship. Hallmarked Purity.",
    copyrightYear: 2026,
    phone: "+91 98460 00000",
    email: "concierge@vpjewellery.com",
    address: "Kerala, India"
  },

  // Target Redirect URLs for Shop, Gold Scheme, and App conversions
  links: {
    // Configurable URL for Shop and Product card clicks:
    shopRedirectUrl: "https://www.instagram.com/vp_goldanddiamonds?stkn=MXRuODI2emdmdTZvYQ%3D%3D&utm_source=qr",
    
    // Configurable URL for "Join Gold Scheme" buttons:
    schemeRedirectUrl: "https://www.instagram.com/vp_goldanddiamonds?stkn=MXRuODI2emdmdTZvYQ%3D%3D&utm_source=qr",
    
    // Official Instagram profile link
    instagramUrl: "https://www.instagram.com/vp_goldanddiamonds?stkn=MXRuODI2emdmdTZvYQ%3D%3D&utm_source=qr",
    
    // Mobile application stores
    appStoreUrl: "https://apps.apple.com/app/vp-jewellery/id123456789",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vpjewellery.app",
    
    // WhatsApp direct concierge link
    whatsappUrl: "https://wa.me/919846000000?text=Hello%20VP%20Jewellery%2C%20I%20would%20like%20to%20inquire%20about%20your%20collection"
  },

  // Indicative Live Gold Rates (per gram)
  goldRates: {
    rate22k: "₹6,850",
    rate24k: "₹7,470",
    hallmarkStandard: "BIS 916 HUID Hallmarked",
    lastUpdated: "Today, Live Market"
  },

  // Curated Signature Collections
  products: [
    {
      id: "midnight-reserve",
      name: "Midnight Reserve",
      collection: "High Jewellery Edition",
      category: "rings",
      description: "Dramatic cushion-cut black diamond center with brilliant diamond pavé in 18K solid yellow gold.",
      price: "₹1,85,000",
      purity: "18K Gold • Natural Black Diamond",
      image: "assets/images/midnight_reserve.jpg",
      featured: true
    },
    {
      id: "golden-truffle",
      name: "Golden Truffle Collection",
      collection: "Heritage Temple Suite",
      category: "necklaces",
      description: "Intricately granulated 22K antique gold choker with Lakshmi motifs, emerald drops, and heirloom jhumkas.",
      price: "₹4,20,000",
      purity: "BIS 916 22K Pure Gold",
      image: "assets/images/golden_truffle.jpg",
      featured: true
    },
    {
      id: "cacao-noir",
      name: "Cacao Noir",
      collection: "Diamond Symphony",
      category: "necklaces",
      description: "Deep smoky champagne diamonds mounted in handcrafted 18K rose gold filigree architecture.",
      price: "₹3,45,000",
      purity: "18K Rose Gold • VVS Clarity",
      image: "assets/images/cacao_noir.jpg",
      featured: true
    },
    {
      id: "vattaparambil-bridal",
      name: "The Vattaparambil Royal Choker",
      collection: "Signature Masterpiece",
      category: "necklaces",
      description: "Opulent royal ceremonial necklace featuring unblemished emerald cabochons and uncut diamond halos.",
      price: "Price on Request",
      purity: "22K BIS Hallmarked Heritage Gold",
      image: "assets/images/hero_jewelry.jpg",
      featured: true
    }
  ]
};

// Export configuration to window scope
window.VP_CONFIG = VP_CONFIG;
