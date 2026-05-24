const fs = require('fs');
const path = require('path');

// --- 1. FIX POLICIES IN ALL ASTRO FILES ---
const pagesDir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.astro'));

const plainTextPolicies = `
            <div class="policies-list-plain" style="margin-bottom: 2rem;">
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* Check in 2 pm - check out antes de las 12 pm</p>
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* Previo a la llegada se pedirá los documentos de identidad de todos los huéspedes y número de placa del vehículo.</p>
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* Todos los huéspedes deberán mostrar su documento de identidad en el check in.</p>
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* Solo pueden ingresar a la propiedad los huéspedes registrados.</p>
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* No se permiten fiestas o reuniones</p>
              <p style="margin-bottom: 0.5rem; color: #94a3b8;">* Solo se permite una mascota y tiene un costo adicional por estadía de $10.</p>
            </div>
`;

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Find the policies-section
  // We need to replace whatever is inside <div class="policies-section"> <h2>...</h2> ... </div>
  // up to the closing </div> of policies-section. BUT there might be other things.
  // Actually, let's just replace `<div class="policies-list">...</div>` or `<div class="policies-grid">...</div>`
  
  content = content.replace(/<div class="(policies-list|policies-grid|policies-list-plain)">[\s\S]*?<\/div>/, plainTextPolicies.trim());

  // Wait, in `departamento-1d.astro`, if we replace `<div class="policies-list-plain">...</div>`, we might miss the closing `</div>` because `policies-list-plain` contains multiple `<p>` and might be tricky if regex is lazy. Let's make sure it's accurate.
  // We can just find `<h2>Políticas Básicas</h2>` and the next `</div>`
  // A safer approach:
  const h2Index = content.indexOf('<h2>Políticas Básicas</h2>');
  if (h2Index !== -1) {
    const sectionStart = content.substring(0, h2Index + 26);
    let rest = content.substring(h2Index + 26);
    
    // Skip spaces
    rest = rest.trimStart();
    
    // Now we expect a <div class="policies-list"> or similar.
    const divMatch = rest.match(/^<div class="(policies-list|policies-grid|policies-list-plain)"[^>]*>[\s\S]*?<\/div>/);
    if (divMatch) {
       content = sectionStart + '\n' + plainTextPolicies + '\n' + rest.substring(divMatch[0].length);
    } else {
       // if not found, let's try to find <div class="policies-section"> and replace its content
       const policiesSectionMatch = content.match(/<div class="policies-section">[\s\S]*?<\/div>/);
       // Wait, no, we might have multiple nested divs inside (like `policy-warning`). Let's keep it simple.
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Updated policies in ' + file);
  }
});

// --- 2. FIX ORDER IN ACCOMMODATION DATA ---
const dataPath = 'src/data/accommodationData.js';
let dataContent = fs.readFileSync(dataPath, 'utf8');

const codeToEval = dataContent.replace(/export const/g, 'const').replace(/export function/g, 'function');
let data;
eval(codeToEval + '; data = accommodationsData;');

const allAcc = [...data.hoteles, ...data.departamentos, ...data.hostales];

// The user wants: "HOTEL VILLA DEL MAR SI ESTABA BIEN ABAJO JUNTO A HOTEL DE CHAQANA"
// This means we put Hotel Villa del Mar and Hotel Chaqana in the "hoteles" array.

const deptOrder = [
  'Mi Casa en Salinas',
  'Sol de Salinas',
  'Departamento 1D',
  'Departamento 1I',
  'Departamento 2D',
  'Departamento 2I',
  'Departamento Ciudadela'
];

const hotelOrder = [
  'Hotel Villa del Mar',
  'Hotel Chaqana'
];

// Wait, the rooms (Habitaciones) like "Habitación Estandar", "Chaqana 2", etc. were originally in `departamentos`? 
// Let's look at their location: "Hotel Chaqana". If they are rooms in Hotel Chaqana, maybe they should be in "departamentos" array? 
// In the original file, ID 8, 9, 10, 14 were in `departamentos`. 
const otherDepartamentos = [
  'Habitación Estandar',
  'Chaqana 2',
  'Habitación Familiar',
  'Habitación Económica'
];

const newDepartamentos = [];
[...deptOrder, ...otherDepartamentos].forEach(name => {
  const found = allAcc.find(a => a.name === name);
  if (found) newDepartamentos.push(found);
});

const newHoteles = [];
hotelOrder.forEach(name => {
  const found = allAcc.find(a => a.name === name);
  if (found) newHoteles.push(found);
});

const newAccommodationsData = {
  hoteles: newHoteles,
  departamentos: newDepartamentos,
  hostales: []
};

const replacement = 'export const accommodationsData = ' + JSON.stringify(newAccommodationsData, null, 2) + ';';

// Use a robust regex for replacement
const newFileContent = dataContent.replace(/export const accommodationsData = \{[\s\S]*?hostales:\s*\[\]\r?\n\};/, replacement);

fs.writeFileSync(dataPath, newFileContent);
console.log('Reordered accommodationsData successfully');
