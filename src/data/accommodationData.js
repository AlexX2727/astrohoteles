// src/data/accommodationData.js

export const accommodationsData = {
  hoteles: [
    {
      id: 1,
      name: "Hotel Villa del Mar",
      location: "Salinas",
      rating: 9.5,
      price: 95,
      image: "/images/hoteles/Villa del Mar/IMG_2538.jpg",
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🌅" },
        { icon: "🅿️" }
      ],
      coordinates: [-80.9560, -2.2105],
      hasDetailPage: true,
      detailPageUrl: "/villa-del-mar"
    },
    {
      id: 2,
      name: "Hotel Chaqana",
      location: "Salinas",
      rating: 9.7,
      price: 110,
      image: "/images/hoteles/Chaqana/IMG_2559.jpg",
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🌅" },
        { icon: "🅿️" },
        { icon: "🏊‍♂️" }
      ],
      coordinates: [-80.9555, -2.2100],
      hasDetailPage: true,
      detailPageUrl: "/chaqana"
    }
  ],
  departamentos: [
    {
      id: 4,
      name: "Departamento 1D",
      location: "Hotel Villa del Mar",
      rating: 9.5,
      price: 85,
      image: "/images/departamentos/Villa del mar/1D/Puerta.jpg",
      images: [
        "/images/departamentos/Villa del mar/1D/Puerta.jpg",
        "/images/departamentos/Villa del mar/1D/IMG_2364.jpg",
        "/images/departamentos/Villa del mar/1D/IMG_2365.jpg"
      ],
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🍳" },
        { icon: "🛁" }
      ],
      coordinates: [-80.9560, -2.2105],
      hasDetailPage: true,
      detailPageUrl: "/departamento-1d"
    },
    {
      id: 5,
      name: "Departamento 1I",
      location: "Hotel Villa del Mar",
      rating: 9.5,
      price: 85,
      image: "/images/departamentos/Villa del mar/1I/Puerta.jpg",
      images: [
        "/images/departamentos/Villa del mar/1I/Puerta.jpg",
        "/images/departamentos/Villa del mar/1I/IMG_2284.jpg",
        "/images/departamentos/Villa del mar/1I/IMG_2287.jpg"
      ],
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🍳" },
        { icon: "🛁" }
      ],
      coordinates: [-80.9560, -2.2105],
      hasDetailPage: true,
      detailPageUrl: "/departamento-1i"
    },
    {
      id: 6,
      name: "Departamento 2D",
      location: "Hotel Villa del Mar",
      rating: 9.5,
      price: 85,
      image: "/images/departamentos/Villa del mar/2D/Puerta.jpg",
      images: [
        "/images/departamentos/Villa del mar/2D/Puerta.jpg",
        "/images/departamentos/Villa del mar/2D/IMG_2423.jpg",
        "/images/departamentos/Villa del mar/2D/IMG_2426.jpg"
      ],
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🍳" },
        { icon: "🛁" }
      ],
      coordinates: [-80.9560, -2.2105],
      hasDetailPage: true,
      detailPageUrl: "/departamento-2d"
    },
    {
      id: 7,
      name: "Departamento 2I",
      location: "Hotel Villa del Mar",
      rating: 9.5,
      price: 85,
      image: "/images/departamentos/Villa del mar/2I/Puerta.jpg",
      images: [
        "/images/departamentos/Villa del mar/2I/Puerta.jpg",
        "/images/departamentos/Villa del mar/2I/IMG_2479.jpg",
        "/images/departamentos/Villa del mar/2I/IMG_2480.jpg"
      ],
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🍳" },
        { icon: "🛁" }
      ],
      coordinates: [-80.9560, -2.2105],
      hasDetailPage: true,
      detailPageUrl: "/departamento-2i"
    }
  ],
  hostales: [
    {
      id: 8,
      name: "Hostal Surfero",
      location: "Cerca de La Chocolatera",
      rating: 7.8,
      price: 18,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🏄‍♂️" },
        { icon: "🧺" }
      ],
      coordinates: [-80.9058, -2.2267]
    },
    {
      id: 9,
      name: "Hostal Backpackers",
      location: "Centro de Salinas",
      rating: 8.0,
      price: 25,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "☕" },
        { icon: "🧺" }
      ],
      coordinates: [-80.9560, -2.2115]
    }
  ]
};

// Mapbox configuration
export const MAPBOX_CONFIG = {
  accessToken: 'pk.eyJ1IjoiZGVubnkyNyIsImEiOiJjbWZrbzMwYXkwMGJwMmxxMTFmdmM1cmh2In0.BCg8zmi25CEl_QURSA6A0w',
  defaultStyle: 'mapbox://styles/mapbox/dark-v11',
  alternativeStyle: 'mapbox://styles/mapbox/streets-v12',
  defaultCenter: [-80.9553, -2.2108], // Salinas, Ecuador
  defaultZoom: 12
};

// Helper functions
export function getAllAccommodations() {
  return [...accommodationsData.hoteles, ...accommodationsData.departamentos, ...accommodationsData.hostales];
}

export function getAccommodationById(id) {
  const all = getAllAccommodations();
  return all.find(acc => acc.id === parseInt(id));
}

export function getMarkerColor(category) {
  const colors = {
    hoteles: '#FF6B35',
    departamentos: '#0EA5E9',
    hostales: '#10B981'
  };
  return colors[category] || '#FF6B35';
}

// Get SVG icon for amenity with gorgeous modern icons
export function getAmenityIcon(iconType) {
  const iconMap = {
    '👥': `<svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <defs>
        <linearGradient id="peopleGrad3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="30%" style="stop-color:#764ba2;stop-opacity:1" />
          <stop offset="70%" style="stop-color:#f093fb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f5576c;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="peopleGlow" cx="50%" cy="30%" r="60%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
        </radialGradient>
        <filter id="peopleShadow3D">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.4"/>
          <feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="#764ba2" flood-opacity="0.3"/>
        </filter>
      </defs>
      <ellipse cx="16" cy="26" rx="15" ry="3" fill="url(#peopleGlow)" opacity="0.2"/>
      <g filter="url(#peopleShadow3D)">
        <circle cx="10" cy="8" r="3.5" fill="url(#peopleGrad3D)"/>
        <circle cx="22" cy="8" r="3.5" fill="url(#peopleGrad3D)"/>
        <circle cx="10" cy="6.5" r="1.5" fill="url(#peopleGlow)" opacity="0.6"/>
        <circle cx="22" cy="6.5" r="1.5" fill="url(#peopleGlow)" opacity="0.6"/>
      </g>
      <path d="M4 26v-4c0-3.5 3-6 6-6s6 2.5 6 6v4" stroke="url(#peopleGrad3D)" stroke-width="3" stroke-linecap="round" fill="none" filter="url(#peopleShadow3D)"/>
      <path d="M16 26v-4c0-3.5 3-6 6-6s6 2.5 6 6v4" stroke="url(#peopleGrad3D)" stroke-width="3" stroke-linecap="round" fill="none" filter="url(#peopleShadow3D)"/>
      <animateTransform attributeName="transform" attributeType="XML" type="scale" values="1;1.05;1" dur="3s" repeatCount="indefinite"/>
    </svg>`,
    '📶': `<svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <defs>
        <linearGradient id="wifiGrad3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4facfe;stop-opacity:1" />
          <stop offset="25%" style="stop-color:#00f2fe;stop-opacity:1" />
          <stop offset="75%" style="stop-color:#43e97b;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#38f9d7;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="wifiRadial" cx="50%" cy="80%" r="70%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
        </radialGradient>
        <filter id="wifiGlow3D">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#4facfe" flood-opacity="0.6"/>
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="pulseGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="16" cy="28" rx="12" ry="2" fill="url(#wifiRadial)" opacity="0.4"/>
      <g filter="url(#wifiGlow3D)">
        <path d="M4 14c6-6 18-6 24 0" stroke="url(#wifiGrad3D)" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.4"/>
        <path d="M8 18c4-4 12-4 16 0" stroke="url(#wifiGrad3D)" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.7"/>
        <path d="M12 22c2-2 6-2 8 0" stroke="url(#wifiGrad3D)" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="1"/>
        <circle cx="16" cy="26" r="2.5" fill="url(#wifiGrad3D)"/>
      </g>
      <circle cx="16" cy="25" r="1" fill="url(#wifiRadial)" opacity="0.8"/>
      <g filter="url(#pulseGlow)">
        <circle cx="16" cy="26" r="1" fill="#ffffff" opacity="0.6">
          <animate attributeName="r" values="1;3;1" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>`,
    '🏊‍♂️': `<svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <defs>
        <linearGradient id="poolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#74b9ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0984e3;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="bubbleGrad">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.2" />
        </radialGradient>
      </defs>
      <rect x="3" y="12" width="26" height="12" rx="4" fill="url(#poolGrad)"/>
      <path d="M6 16h20" stroke="#81D4FA" stroke-width="1" opacity="0.7"/>
      <path d="M6 18h20" stroke="#81D4FA" stroke-width="1" opacity="0.5"/>
      <path d="M6 20h20" stroke="#81D4FA" stroke-width="1" opacity="0.3"/>
      <circle cx="10" cy="17" r="1.5" fill="url(#bubbleGrad)"/>
      <circle cx="22" cy="19" r="1" fill="url(#bubbleGrad)"/>
      <circle cx="16" cy="15" r="0.8" fill="url(#bubbleGrad)"/>
      <circle cx="25" cy="16" r="1.2" fill="url(#bubbleGrad)"/>
    </svg>`,
    '🅿️': `<svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <defs>
        <linearGradient id="carGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f7931e;stop-opacity:1" />
        </linearGradient>
        <filter id="carShadow">
          <dropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/>
        </filter>
      </defs>
      <rect x="4" y="10" width="24" height="14" rx="3" fill="url(#carGrad)" filter="url(#carShadow)"/>
      <circle cx="10" cy="22" r="3" fill="#2d3436"/>
      <circle cx="22" cy="22" r="3" fill="#2d3436"/>
      <circle cx="10" cy="22" r="1.5" fill="#636e72"/>
      <circle cx="22" cy="22" r="1.5" fill="#636e72"/>
      <rect x="6" y="12" width="20" height="8" rx="1" fill="none" stroke="#fff" stroke-width="2"/>
      <text x="16" y="18" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">P</text>
    </svg>`,
    '🌅': `<svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <defs>
        <radialGradient id="sunGrad">
          <stop offset="0%" style="stop-color:#fff3a0;stop-opacity:1" />
          <stop offset="70%" style="stop-color:#fed65f;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f7931e;stop-opacity:1" />
        </radialGradient>
        <linearGradient id="seaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#0984e3;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#74b9ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00cec9;stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="10" r="4" fill="url(#sunGrad)"/>
      <path d="M16 2v3M16 17v3M6.34 6.34l2.12 2.12M23.66 6.34l-2.12 2.12M2 16h3M27 16h3" stroke="url(#sunGrad)" stroke-width="2" stroke-linecap="round"/>
      <rect x="2" y="20" width="28" height="8" fill="url(#seaGrad)"/>
      <path d="M4 22c3-1 6 1 9 0s6-1 9 0s6 1 9 0" stroke="#ffffff" stroke-width="1" opacity="0.6"/>
      <path d="M6 24c2-1 4 1 6 0s4-1 6 0s4 1 6 0" stroke="#ffffff" stroke-width="0.8" opacity="0.4"/>
    </svg>`,
    '🍳': `<svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <defs>
        <linearGradient id="stoveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#636e72;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2d3436;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="flameGrad">
          <stop offset="0%" style="stop-color:#fd79a8;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#e84393;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e17055;stop-opacity:1" />
        </radialGradient>
      </defs>
      <rect x="4" y="8" width="24" height="16" rx="3" fill="url(#stoveGrad)"/>
      <rect x="6" y="10" width="20" height="12" rx="2" fill="#74b9ff" opacity="0.1"/>
      <circle cx="12" cy="16" r="3" fill="url(#flameGrad)"/>
      <circle cx="20" cy="16" r="3" fill="url(#flameGrad)"/>
      <circle cx="12" cy="16" r="1.5" fill="#fdcb6e" opacity="0.8"/>
      <circle cx="20" cy="16" r="1.5" fill="#fdcb6e" opacity="0.8"/>
      <rect x="26" y="12" width="4" height="2" rx="1" fill="#74b9ff"/>
    </svg>`,
    '🏄‍♂️': `<svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#74b9ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0984e3;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="boardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ff7675;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d63031;stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M2 24c4-2 8 2 12 0s8-2 12 0v4H2z" fill="url(#waveGrad)"/>
      <path d="M4 22c3-1 6 1 9 0s6-1 9 0s6 1 9 0" stroke="url(#waveGrad)" stroke-width="2"/>
      <rect x="12" y="8" width="8" height="16" rx="2" fill="url(#boardGrad)"/>
      <circle cx="16" cy="6" r="2.5" fill="#fdcb6e"/>
    </svg>`,
    '🧺': `<svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <defs>
        <linearGradient id="washerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#74b9ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0984e3;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="bubbleWash">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
          <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.3" />
        </radialGradient>
      </defs>
      <rect x="6" y="8" width="20" height="18" rx="3" fill="url(#washerGrad)"/>
      <circle cx="16" cy="17" r="6" fill="none" stroke="#fff" stroke-width="2.5"/>
      <circle cx="16" cy="17" r="3" fill="url(#bubbleWash)"/>
      <circle cx="13" cy="15" r="1" fill="url(#bubbleWash)"/>
      <circle cx="19" cy="19" r="0.8" fill="url(#bubbleWash)"/>
      <circle cx="16" cy="20" r="0.6" fill="url(#bubbleWash)"/>
      <rect x="8" y="6" width="16" height="3" rx="1" fill="#2d3436"/>
    </svg>`,
    '🛁': `<svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <defs>
        <linearGradient id="toiletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#e8e8e8;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d0d0d0;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="waterBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#5dade2;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#3498db;stop-opacity:1" />
        </linearGradient>
        <filter id="toiletShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.3"/>
        </filter>
      </defs>
      <!-- Base del inodoro -->
      <ellipse cx="16" cy="26" rx="8" ry="3" fill="url(#toiletGrad)" filter="url(#toiletShadow)"/>
      <!-- Cuerpo del inodoro -->
      <path d="M10 16 Q10 26 16 26 Q22 26 22 16 Z" fill="url(#toiletGrad)" filter="url(#toiletShadow)"/>
      <!-- Asiento -->
      <ellipse cx="16" cy="15" rx="6" ry="4" fill="none" stroke="url(#toiletGrad)" stroke-width="2"/>
      <ellipse cx="16" cy="15" rx="4" ry="2.5" fill="url(#waterBlue)" opacity="0.6"/>
      <!-- Tanque -->
      <rect x="12" y="6" width="8" height="10" rx="1" fill="url(#toiletGrad)" filter="url(#toiletShadow)"/>
      <!-- Botón de descarga -->
      <circle cx="16" cy="10" r="1.5" fill="#74b9ff"/>
      <circle cx="16" cy="10" r="0.8" fill="#3498db"/>
      <!-- Brillo -->
      <ellipse cx="15" cy="12" rx="1.5" ry="1" fill="#ffffff" opacity="0.4"/>
      <ellipse cx="18" cy="8" rx="1" ry="0.7" fill="#ffffff" opacity="0.3"/>
    </svg>`,
    '🏋️‍♂️': `<svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <defs>
        <linearGradient id="barbellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#636e72;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2d3436;stop-opacity:1" />
        </linearGradient>
        <radialGradient id="weightGrad">
          <stop offset="0%" style="stop-color:#e17055;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d63031;stop-opacity:1" />
        </radialGradient>
      </defs>
      <rect x="4" y="15" width="24" height="2" rx="1" fill="url(#barbellGrad)"/>
      <circle cx="6" cy="16" r="4" fill="url(#weightGrad)"/>
      <circle cx="26" cy="16" r="4" fill="url(#weightGrad)"/>
      <rect x="12" y="13" width="8" height="6" rx="2" fill="url(#barbellGrad)"/>
      <rect x="13" y="8" width="6" height="3" rx="1" fill="#00b894"/>
    </svg>`,
    '☕': `<svg viewBox="0 0 32 32" fill="none" width="32" height="32">
      <defs>
        <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8d6e63;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#5d4037;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="coffeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#6c5ce7;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#5f3dc4;stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M8 12h12v10c0 3-3 5-6 5s-6-2-6-5V12z" fill="url(#cupGrad)"/>
      <path d="M8 12h12v8c0 2-2 3-4 3h-4c-2 0-4-1-4-3V12z" fill="url(#coffeeGrad)"/>
      <ellipse cx="14" cy="14" rx="4" ry="1.5" fill="#fdcb6e" opacity="0.9"/>
      <path d="M20 14h4c2 0 3 1 3 3s-1 3-3 3h-4" stroke="url(#cupGrad)" stroke-width="2" fill="none"/>
      <path d="M11 8c0-1 1-3 3-3s3 2 3 3" stroke="#ddd" stroke-width="1.5" fill="none"/>
      <path d="M13 7c0-1 0-2 1-2s1 1 1 2" stroke="#ddd" stroke-width="1" fill="none"/>
    </svg>`
  };
  return iconMap[iconType] || `<svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30"><circle cx="12" cy="12" r="4" fill="#0EA5E9"/></svg>`;
}
