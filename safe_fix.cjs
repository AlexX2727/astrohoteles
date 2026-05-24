const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(directoryPath).filter(f => f.endsWith('.astro'));

const plainTextPolicies = `
            <div class="policies-list-plain" style="margin-bottom: 2rem;">
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* Check in 2 pm - check out antes de las 12 pm</p>
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* Previo a la llegada se pedirá los documentos de identidad de todos los huéspedes y número de placa del vehículo.</p>
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* Todos los huéspedes deberán mostrar su documento de identidad en el check in.</p>
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* Solo pueden ingresar a la propiedad los huéspedes registrados.</p>
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* No se permiten fiestas o reuniones</p>
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* Solo se permite una mascota y tiene un costo adicional por estadía de $$10.</p>
            </div>
`;

files.forEach(file => {
  let filePath = path.join(directoryPath, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Remove contact-info below reserve button safely
  // <div class="contact-info"> has NO nested divs. We can just match until the first </div>.
  content = content.replace(/<div class="contact-info">[\s\S]*?<\/div>/g, '');

  // 2. Policies: safely match the policies-list or policies-grid and its map block
  content = content.replace(/<div class="(policies-list|policies-grid)">[\s\S]*?policies\.map\([\s\S]*?\)\s*\)\s*\}\s*<\/div>/g, plainTextPolicies.trim());

  // 3. Icons: design alargado (pill shape)
  content = content.replace(/\.amenity-item\s*\{[^}]*?\}/g, function() {
      return '.amenity-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 1rem;\n    padding: 1rem 1.5rem;\n    background: linear-gradient(135deg, rgba(74, 154, 187, 0.05), rgba(255, 255, 255, 0.02));\n    border-radius: 50px;\n    border: 1px solid rgba(255, 255, 255, 0.05);\n    transition: all 0.3s ease;\n  }';
  });
  
  // 4. Icons: reduce size
  content = content.replace(/\.amenity-icon-large\s*\{[^}]*?\}/g, function() {
      return '.amenity-icon-large {\n    width: 24px;\n    height: 24px;\n    display: block;\n    opacity: 0.8;\n  }';
  });

  // 5. Button color - Naranja oscuro sin led
  content = content.replace(/\.reserve-button\s*\{[^}]*?\}/g, function(match) {
      if(match.includes('background')) {
         return match.replace(/background:\s*[^;]+;/g, 'background: #c85e35;')
                     .replace(/box-shadow:\s*[^;]+(?:,\s*[^;]+)*;/g, 'box-shadow: none;');
      }
      return match;
  });
  
  content = content.replace(/\.reserve-button:hover\s*\{[^}]*?\}/g, function(match) {
      if(match.includes('background')) {
         return match.replace(/background:\s*[^;]+;/g, 'background: #b84e25;')
                     .replace(/box-shadow:\s*[^;]+(?:,\s*[^;]+)*;/g, 'box-shadow: 0 4px 12px rgba(0,0,0,0.3);');
      }
      return match;
  });

  content = content.replace(/\.mobile-reserve-btn\s*\{[^}]*?\}/g, function(match) {
      if(match.includes('background')) {
         return match.replace(/background:\s*[^;]+;/g, 'background: #c85e35;')
                     .replace(/box-shadow:\s*[^;]+(?:,\s*[^;]+)*;/g, 'box-shadow: none;');
      }
      return match;
  });

  // Quitar led de .booking-card
  content = content.replace(/\.booking-card\s*\{[^}]*?\}/g, function(match) {
      if(match.includes('box-shadow')) {
         return match.replace(/background:\s*[^;]+(?:,\s*[^;]+)*;/g, 'background: #0f172a;')
                     .replace(/box-shadow:\s*[^;]+(?:,\s*[^;]+)*;/g, 'box-shadow: none;');
      }
      return match;
  });
  
  // 6. Whitespace/Padding: Apply more padding to sections
  content = content.replace(/\.info-section,\s*\.description-section,\s*\.policies-section\s*\{[^}]*?\}/g, function() {
      return '.info-section,\n  .description-section,\n  .policies-section {\n    margin-bottom: 5rem;\n  }';
  });
  
  content = content.replace(/\.main-content\s*\{[^}]*?\}/g, function(match) {
      return match.replace(/gap:\s*[^;]+;/, 'gap: 5rem;');
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
});
console.log('Done script');
