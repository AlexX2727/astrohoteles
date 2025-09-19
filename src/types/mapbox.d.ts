// Mapbox type declarations
declare module 'mapbox-gl' {
  export * from 'mapbox-gl';
}

declare global {
  interface Window {
    mapboxgl: any; // Using any to avoid type conflicts with the actual mapboxgl object
    lucide: {
      createIcons: () => void;
    };
  }
}

// Type declarations for Mapbox GL JS
type Map = any;
type Marker = any;
type Popup = any;
