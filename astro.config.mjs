import { defineConfig } from 'astro/config';

export default defineConfig({
  // Configuración base
  site: 'https://tu-dominio.com',
  
  // Optimizaciones
  build: {
    inlineStylesheets: 'auto'
  },
  
  // Configuración para desarrollo
  server: {
    port: 3000,
    host: true
  }
});