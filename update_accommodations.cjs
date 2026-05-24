const fs = require('fs');

const path = 'src/data/accommodationData.js';
let content = fs.readFileSync(path, 'utf8');

// The file exports `accommodationsData`.
// We will replace the entire file content from `export const accommodationsData = {` down to `hostales: []\r\n};` or similar.
const codeToEval = content.replace(/export const/g, 'const').replace(/export function/g, 'function');
let data;
eval(codeToEval + '; data = accommodationsData;');

const allAcc = [...data.hoteles, ...data.departamentos, ...data.hostales];

// Order:
// 1. Mi Casa en Salinas
// 2. Sol de Salinas
// 3. Departamentos
// 4. Villas (Hotel Villa del Mar)
// 5. Habitaciones

const orderList = [
  'Mi Casa en Salinas',
  'Sol de Salinas',
  'Departamento 1D',
  'Departamento 1I',
  'Departamento 2D',
  'Departamento 2I',
  'Departamento Ciudadela',
  'Hotel Villa del Mar',
  'Habitación Estandar',
  'Chaqana 2',
  'Habitación Familiar',
  'Habitación Económica'
];

const newDepartamentos = [];
orderList.forEach(name => {
  const found = allAcc.find(a => a.name === name);
  if (found) newDepartamentos.push(found);
});

const newHoteles = allAcc.filter(a => a.name === 'Hotel Chaqana');

const newAccommodationsData = {
  hoteles: newHoteles,
  departamentos: newDepartamentos,
  hostales: []
};

// We will stringify the new data, and inject it back into the file.
const replacement = 'export const accommodationsData = ' + JSON.stringify(newAccommodationsData, null, 2) + ';';

// Use a regex that catches everything from 'export const accommodationsData = {' to 'hostales: []\n};' regardless of whitespace
const newContent = content.replace(/export const accommodationsData = \{[\s\S]*?hostales:\s*\[\]\r?\n\};/, replacement);

fs.writeFileSync(path, newContent);
console.log('Reordered accommodationsData successfully');
