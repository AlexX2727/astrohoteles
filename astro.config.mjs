import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  // Configuración base
  site: 'https://tu-dominio.com',
  
  // Integraciones
  integrations: [icon()],

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