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

  // Curated Signature Collections (Gold, Diamond, Silver)
  products: [
    {
      id: "vattaparambil-royal-choker",
      name: "The Royal Bridal Choker",
      collection: "Gold Collection",
      category: "gold",
      description: "Opulent ceremonial bridal necklace featuring unblemished emerald cabochons and uncut heritage gold halos.",
      purity: "22K BIS Hallmarked Heritage Gold",
      image: "assets/images/hero_jewelry.jpg",
      featured: true
    },
    {
      id: "golden-truffle",
      name: "Golden Temple Suite",
      collection: "Gold Collection",
      category: "gold",
      description: "Intricately granulated 22K antique gold choker with Lakshmi motifs, emerald drops, and heirloom jhumkas.",
      purity: "BIS 916 22K Pure Gold",
      image: "assets/images/golden_truffle.jpg",
      featured: true
    },
    {
      id: "midnight-reserve",
      name: "Midnight Reserve Solitaire",
      collection: "Diamond Collection",
      category: "diamond",
      description: "Dramatic cushion-cut black diamond center with brilliant diamond pavé in 18K solid yellow gold architecture.",
      purity: "18K Gold • Natural Black Diamond",
      image: "assets/images/midnight_reserve.jpg",
      featured: true
    },
    {
      id: "cacao-noir",
      name: "Cacao Noir Diamond Choker",
      collection: "Diamond Collection",
      category: "diamond",
      description: "Deep smoky champagne diamonds mounted in handcrafted 18K rose gold filigree architecture with VVS clarity.",
      purity: "18K Rose Gold • VVS Diamonds",
      image: "assets/images/cacao_noir.jpg",
      featured: true
    },
    {
      id: "celestial-filigree-silver",
      name: "Celestial Filigree Choker Set",
      collection: "Silver Collection",
      category: "silver",
      description: "Mastercrafted 925 sterling silver bridal choker suite with regal crescent filigree, uncut stones, and pearls.",
      purity: "925 Hallmarked Pure Silver",
      image: "assets/images/silver_collection.jpg",
      featured: true
    },
    {
      id: "imperial-peacock-kadagam",
      name: "Imperial Peacock Silver Cuff",
      collection: "Silver Collection",
      category: "silver",
      description: "Heirloom handcrafted sterling silver kadagam cuff adorned with traditional embossed peacock engraving and emerald cabochons.",
      purity: "925 Hallmarked Antique Silver",
      image: "assets/images/silver_kadagam.jpg",
      featured: true
    }
  ]
};

// Export configuration to window scope
window.VP_CONFIG = VP_CONFIG;
