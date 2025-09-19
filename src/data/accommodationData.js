// src/data/accommodationData.js

export const accommodationsData = {
    hoteles: [
      {
        id: 1,
        name: "Hotel Paradise Resort",
        location: "Maldivas",
        rating: 9.2,
        price: 450,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        amenities: [
          { icon: "👥", text: "4 personas", value: 4 },
          { icon: "📶", text: "WiFi gratis" },
          { icon: "🏊‍♂️", text: "Piscina" },
          { icon: "🅿️", text: "Parking" }
        ],
        coordinates: [73.5093, 3.2028]
      },
      {
        id: 2,
        name: "Mountain Lodge",
        location: "Zúrich, Suiza",
        rating: 8.9,
        price: 320,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        amenities: [
          { icon: "👥", text: "6 personas", value: 6 },
          { icon: "📶", text: "WiFi gratis" },
          { icon: "🔥", text: "Chimenea" },
          { icon: "🎿", text: "Ski" }
        ],
        coordinates: [8.5417, 47.3769]
      },
      {
        id: 3,
        name: "Urban Luxury",
        location: "Nueva York, USA",
        rating: 9.0,
        price: 280,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        amenities: [
          { icon: "👥", text: "2 personas", value: 2 },
          { icon: "📶", text: "WiFi gratis" },
          { icon: "🏋️‍♂️", text: "Gimnasio" },
          { icon: "🛁", text: "Spa" }
        ],
        coordinates: [-74.0060, 40.7128]
      }
    ],
    departamentos: [
      {
        id: 4,
        name: "Apartamento Central",
        location: "Madrid, España",
        rating: 8.5,
        price: 120,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        amenities: [
          { icon: "👥", text: "3 personas", value: 3 },
          { icon: "📶", text: "WiFi gratis" },
          { icon: "🍳", text: "Cocina" },
          { icon: "🚗", text: "Parking" }
        ],
        coordinates: [-3.7038, 40.4168]
      },
      {
        id: 5,
        name: "Loft Moderno",
        location: "Barcelona, España",
        rating: 8.8,
        price: 150,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        amenities: [
          { icon: "👥", text: "4 personas", value: 4 },
          { icon: "📶", text: "WiFi gratis" },
          { icon: "🍳", text: "Cocina" },
          { icon: "🌅", text: "Terraza" }
        ],
        coordinates: [2.1734, 41.3851]
      }
    ],
    hostales: [
      {
        id: 6,
        name: "Backpacker Hub",
        location: "Lima, Perú",
        rating: 8.2,
        price: 25,
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        amenities: [
          { icon: "👥", text: "8 personas", value: 8 },
          { icon: "📶", text: "WiFi gratis" },
          { icon: "🍳", text: "Cocina" },
          { icon: "🧺", text: "Lavandería" }
        ],
        coordinates: [-77.0428, -12.0464]
      },
      {
        id: 7,
        name: "City Hostel",
        location: "Buenos Aires, Argentina",
        rating: 7.8,
        price: 18,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        amenities: [
          { icon: "👥", text: "12 personas", value: 12 },
          { icon: "📶", text: "WiFi gratis" },
          { icon: "☕", text: "Café gratis" },
          { icon: "🎮", text: "Sala de juegos" }
        ],
        coordinates: [-58.3816, -34.6037]
      }
    ]
  };
  
  // Mapbox configuration
  export const MAPBOX_CONFIG = {
    accessToken: 'pk.eyJ1IjoiZGVubnkyNyIsImEiOiJjbWZrbzMwYXkwMGJwMmxxMTFmdmM1cmh2In0.BCg8zmi25CEl_QURSA6A0w',
    defaultStyle: 'mapbox://styles/mapbox/dark-v11',
    alternativeStyle: 'mapbox://styles/mapbox/streets-v12',
    defaultCenter: [-74.0060, 40.7128], // NYC
    defaultZoom: 2
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