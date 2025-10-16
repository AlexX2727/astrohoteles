// Script para comprimir y optimizar todas las imágenes de departamentos
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración
const CONFIG = {
  quality: 80, // Calidad JPEG (80 es excelente balance)
  maxWidth: 1920, // Ancho máximo en pixels
  maxHeight: 1920, // Alto máximo en pixels
};

// Directorios a procesar
const imageDirectories = [
  './public/images/departamentos/Villa del mar/1D',
  './public/images/departamentos/Villa del mar/1I',
  './public/images/departamentos/Villa del mar/2D',
  './public/images/departamentos/Villa del mar/2I'
];

// Función para obtener el tamaño de archivo en MB
function getFileSizeInMB(filepath) {
  const stats = fs.statSync(filepath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Función para procesar una imagen
async function compressImage(filePath) {
  try {
    const originalSize = getFileSizeInMB(filePath);

    // Crear backup del original
    const backupPath = filePath.replace(/\.jpg$/i, '.original.jpg');
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }

    // Comprimir imagen
    await sharp(filePath)
      .resize(CONFIG.maxWidth, CONFIG.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: CONFIG.quality,
        mozjpeg: true // Mejor compresión
      })
      .toFile(filePath + '.tmp');

    // Reemplazar original con comprimida
    fs.unlinkSync(filePath);
    fs.renameSync(filePath + '.tmp', filePath);

    const newSize = getFileSizeInMB(filePath);
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`✅ ${path.basename(filePath)}: ${originalSize}MB → ${newSize}MB (${savings}% reducción)`);

    return {
      file: path.basename(filePath),
      originalSize: parseFloat(originalSize),
      newSize: parseFloat(newSize),
      savings: parseFloat(savings)
    };
  } catch (error) {
    console.error(`❌ Error procesando ${filePath}:`, error.message);
    return null;
  }
}

// Función para procesar un directorio
async function compressDirectory(dirPath) {
  console.log(`\n📁 Procesando directorio: ${dirPath}`);

  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️ Directorio no encontrado: ${dirPath}`);
    return [];
  }

  const files = fs.readdirSync(dirPath)
    .filter(file => /\.(jpg|jpeg)$/i.test(file) && !file.includes('.original.'))
    .map(file => path.join(dirPath, file));

  console.log(`📷 Encontradas ${files.length} imágenes`);

  const results = [];
  for (const file of files) {
    const result = await compressImage(file);
    if (result) results.push(result);
  }

  return results;
}

// Función principal
async function main() {
  console.log('🚀 Iniciando compresión de imágenes...\n');
  console.log(`⚙️ Configuración:`);
  console.log(`   - Calidad: ${CONFIG.quality}%`);
  console.log(`   - Dimensión máxima: ${CONFIG.maxWidth}x${CONFIG.maxHeight}px`);

  const startTime = Date.now();
  let allResults = [];

  for (const dir of imageDirectories) {
    const results = await compressDirectory(dir);
    allResults = allResults.concat(results);
  }

  // Estadísticas finales
  const totalOriginal = allResults.reduce((sum, r) => sum + r.originalSize, 0);
  const totalNew = allResults.reduce((sum, r) => sum + r.newSize, 0);
  const totalSavings = ((1 - totalNew / totalOriginal) * 100).toFixed(1);
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMEN FINAL');
  console.log('='.repeat(60));
  console.log(`✅ Imágenes procesadas: ${allResults.length}`);
  console.log(`📦 Tamaño original total: ${totalOriginal.toFixed(2)} MB`);
  console.log(`📦 Tamaño nuevo total: ${totalNew.toFixed(2)} MB`);
  console.log(`💾 Espacio ahorrado: ${(totalOriginal - totalNew).toFixed(2)} MB`);
  console.log(`📉 Reducción total: ${totalSavings}%`);
  console.log(`⏱️ Tiempo: ${duration} segundos`);
  console.log('='.repeat(60));
  console.log('\n✨ ¡Compresión completada! Las imágenes originales están respaldadas con extensión .original.jpg');
  console.log('⚠️ Si todo funciona bien, puedes eliminar los archivos .original.jpg más tarde.\n');
}

// Ejecutar
main().catch(console.error);
