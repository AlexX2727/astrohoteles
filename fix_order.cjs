const fs = require('fs');

const dataPath = 'src/data/accommodationData.js';
let dataContent = fs.readFileSync(dataPath, 'utf8');

const codeToEval = dataContent.replace(/export const/g, 'const').replace(/export function/g, 'function');
let data;
eval(codeToEval + '; data = accommodationsData;');

const allAcc = [...data.hoteles, ...data.departamentos, ...data.hostales];

// hoteles: Hotel Chaqana + Hotel Villa del Mar (keep them in Hoteles section)
const hotelOrder = ['Hotel Chaqana', 'Hotel Villa del Mar'];
const newHoteles = hotelOrder.map(n => allAcc.find(a => a.name === n)).filter(Boolean);

// departamentos: Mi Casa en Salinas, Sol de Salinas first, then regular departamentos, then habitaciones
const deptOrder = [
  'Mi Casa en Salinas',
  'Sol de Salinas',
  'Departamento 1D',
  'Departamento 1I',
  'Departamento 2D',
  'Departamento 2I',
  'Departamento Ciudadela',
  'Habitación Estandar',
  'Chaqana 2',
  'Habitación Familiar',
  'Habitación Económica'
];
const newDepartamentos = deptOrder.map(n => allAcc.find(a => a.name === n)).filter(Boolean);

const newData = {
  hoteles: newHoteles,
  departamentos: newDepartamentos,
  hostales: []
};

const replacement = 'export const accommodationsData = ' + JSON.stringify(newData, null, 2) + ';';
const newFileContent = dataContent.replace(/export const accommodationsData = \{[\s\S]*?hostales:\s*\[\]\r?\n\};/, replacement);
fs.writeFileSync(dataPath, newFileContent);
console.log('Done! Hotel Villa del Mar is now in hoteles section.');
console.log('Hoteles:', newHoteles.map(h => h.name));
console.log('Departamentos:', newDepartamentos.map(d => d.name));
