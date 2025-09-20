// src/data/accommodationData.js

export const accommodationsData = {
  hoteles: [
    {
      id: 1,
      name: "Hotel Salinas",
      location: "Malecón de Salinas",
      rating: 9.2,
      price: 85,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🏊‍♂️" },
        { icon: "🅿️" }
      ],
      coordinates: [-80.9553, -2.2108]
    },
    {
      id: 2,
      name: "Hotel Miramar",
      location: "Playa Chipipe",
      rating: 8.8,
      price: 65,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🌅" },
        { icon: "🍳" }
      ],
      coordinates: [-80.9563, -2.2118]
    },
    {
      id: 3,
      name: "Hotel Costa Azul",
      location: "Centro de Salinas",
      rating: 8.5,
      price: 120,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🛁" },
        { icon: "🏋️‍♂️" }
      ],
      coordinates: [-80.9548, -2.2095]
    }
  ],
  departamentos: [
    {
      id: 4,
      name: "Depto Vista Mar",
      location: "Frente al mar",
      rating: 8.5,
      price: 45,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🍳" },
        { icon: "🌅" }
      ],
      coordinates: [-80.9548, -2.2103]
    },
    {
      id: 5,
      name: "Apartamento Familiar",
      location: "Zona residencial",
      rating: 8.2,
      price: 60,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60",
      amenities: [
        { icon: "👥" },
        { icon: "📶" },
        { icon: "🍳" },
        { icon: "🅿️" }
      ],
      coordinates: [-80.9540, -2.2110]
    }
  ],
  hostales: [
    {
      id: 6,
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
      id: 7,
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

// Get SVG icon for amenity with intuitive icons
export function getAmenityIcon(iconType) {
  const iconMap = {
    '👥': `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z"/>
    </svg>`,
    '📶': `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M1 9l2 2c2.88-2.88 7.12-2.88 10 0l2-2C9.12 3.12 6.88 3.12 1 9zm8 8l3 3 3-3c-1.65-1.65-4.34-1.65-6 0zm-4-4l2 2c1.23-1.23 3.77-1.23 5 0l2-2C9.46 8.46 6.54 8.46 5 13z"/>
    </svg>`,
    '🏊‍♂️': `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M6 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4.5-7C9.57 7 9 7.57 9 8.5S9.57 10 10.5 10s1.5-.57 1.5-1.5S11.43 7 10.5 7zM19 6H5C3.9 6 3 6.9 3 8v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/>
    </svg>`,
    '🅿️': `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>`,
    '🌅': `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
    </svg>`,
    '🍳': `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>`,
    '🏄‍♂️': `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M21 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2zM7 6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
    </svg>`,
    '🧺': `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v3.5c0 .28.22.5.5.5s.5-.22.5-.5V8h10v2.5c0 .28.22.5.5.5s.5-.22.5-.5z"/>
    </svg>`,
    '🛁': `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M7 7h10v1c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1H9V4c0-.55-.45-1-1-1s-1 .45-1 1v1H6c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V7z"/>
    </svg>`,
    '🏋️‍♂️': `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
    </svg>`,
    '☕': `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 10c0 2.76-2.24 5-5 5s-5-2.24-5-5V5h10v5zm2.5-3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 7 18.5 7z"/>
    </svg>`
  };
  return iconMap[iconType] || `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><circle cx="12" cy="12" r="4"/></svg>`;
}