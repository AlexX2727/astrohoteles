const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.astro') && f !== 'mi-casa-en-salinas.astro' && f !== 'index.astro' && f !== 'departamento-1d-optimized.astro');

const modernHtml = `<div class="amenities-grid-modern">
                            <div class="amenity-chip" style="--icon-color:#2563eb" tabindex="0">
                                <svg class="amenity-chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <path d="M12 20h.01"></path>
                                    <path d="M2 8.82a15 15 0 0 1 20 0"></path>
                                    <path d="M5 12.859a10 10 0 0 1 14 0"></path>
                                    <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
                                </svg>
                                <span class="amenity-chip-tooltip">WiFi gratuito</span>
                            </div>
                            <div class="amenity-chip" style="--icon-color:#16a34a" tabindex="0">
                                <svg class="amenity-chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                    <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
                                </svg>
                                <span class="amenity-chip-tooltip">Parqueadero</span>
                            </div>
                            <div class="amenity-chip" style="--icon-color:#0ea5e9" tabindex="0">
                                <svg class="amenity-chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <path d="M12 2v20"></path>
                                    <path d="m4.93 4.93 14.14 14.14"></path>
                                    <path d="m19.07 4.93-14.14 14.14"></path>
                                    <path d="M2 12h20"></path>
                                    <path d="m9 5 3 3 3-3"></path>
                                    <path d="m9 19 3-3 3 3"></path>
                                    <path d="m5 9 3 3-3 3"></path>
                                    <path d="m19 9-3 3 3 3"></path>
                                </svg>
                                <span class="amenity-chip-tooltip">Aire acondicionado</span>
                            </div>
                            <div class="amenity-chip" style="--icon-color:#ea580c" tabindex="0">
                                <svg class="amenity-chip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <path d="M15 11h.01"></path>
                                    <path d="M11 15h.01"></path>
                                    <path d="M16 16h.01"></path>
                                    <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"></path>
                                    <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"></path>
                                </svg>
                                <span class="amenity-chip-tooltip">Cocina equipada</span>
                            </div>
                        </div>`;

const modernCss = `
  /* Amenity Chips (modern icon-only) */
  .amenity-chip-icon {
    width: 28px;
    height: 28px;
    display: block;
    flex-shrink: 0;
    color: var(--icon-color, #cbd5e1);
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .amenities-grid-modern {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    width: 100%;
  }

  .amenity-chip {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 0;
    min-width: 0;
    height: 80px;
    padding: 0;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.07);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .amenity-chip-label {
    display: none;
  }

  .amenity-chip:hover,
  .amenity-chip:focus-visible {
    border-color: var(--icon-color, #2563eb);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.06);
    outline: none;
  }

  .amenity-chip:hover .amenity-chip-icon,
  .amenity-chip:focus-visible .amenity-chip-icon {
    transform: scale(1.12);
  }

  .amenity-chip-tooltip {
    display: none;
  }
`;

const modernCssResponsive = `
    .amenities-grid-modern {
      gap: 0.75rem;
    }

    .amenity-chip {
      height: 70px;
    }

    .amenity-chip-icon {
      width: 26px;
      height: 26px;
    }
`;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace HTML block
  // Find <div class="amenities-grid"> and the closing </div>
  // Wait, some use <div class="amenities-grid"> and then map, some use the old map with span.
  // A safer regex for HTML:
  const htmlRegex = /<div class="amenities-grid">[\s\S]*?<\/div>\s*<\/div>\s*<!-- Descripción -->/;
  
  if (htmlRegex.test(content)) {
    content = content.replace(htmlRegex, modernHtml + '\n                    </div>\n\n                    <!-- Descripción -->');
  }

  // Replace main CSS block
  // We want to replace everything from /* Amenity Icon Large */ (or whatever comment is there) 
  // down to the start of .features-grid or .space-icon depending on file
  const cssRegex1 = /\/\* Amenity Icon Large \*\/[\s\S]*?(?=\.features-grid\s*\{|\.check-icon\s*\{)/;
  const cssRegex2 = /\.amenity-icon-large\s*\{[\s\S]*?(?=\.features-grid\s*\{|\.check-icon\s*\{)/;
  
  if (cssRegex1.test(content)) {
    content = content.replace(cssRegex1, modernCss + '\n\n                    ');
  } else if (cssRegex2.test(content)) {
    content = content.replace(cssRegex2, modernCss + '\n\n                    ');
  }

  // Replace responsive CSS blocks
  // Find .amenities-grid { ... } up to .info-section h2 { ... } in the @media section
  const responsiveCssRegex = /\.amenities-grid\s*\{[\s\S]*?(?=\.info-section h2\s*,|\.description-text\s*\{|\.policy-item\s*\{)/;
  if (responsiveCssRegex.test(content)) {
    content = content.replace(responsiveCssRegex, modernCssResponsive + '\n\n                        ');
  }

  // Final check: if there is any stray .amenity-name or .amenity-icon-large inside @media
  const stray1 = /\.amenity-name\s*\{[^}]*\}/g;
  const stray2 = /\.amenity-item\s*\{[^}]*\}/g;
  const stray3 = /\.amenity-icon-large\s*\{[^}]*\}/g;
  
  // It's safer to just do this replacement within the @media query, but since we completely 
  // replaced the HTML class names, leaving stray CSS won't break the page visually, just bloat it slightly.
  // Still, we can try to clean it up.

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Processed: ${file}`);
});

console.log('All done!');
