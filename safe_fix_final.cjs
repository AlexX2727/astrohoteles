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

  // Restore again to ensure we start fresh
  // Actually, let's just do git checkout on this specific file to start fresh!
});
