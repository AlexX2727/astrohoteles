
import { trace } from 'potrace';
import fs from 'fs';
import path from 'path';

const inputFile = path.join('public', 'images', 'Logo.png');
const outputFile = path.join('public', 'images', 'logo.svg');

const options = {
  turdSize: 100,
  optTolerance: 0.4,
};

trace(inputFile, options, function(err, svg) {
  if (err) {
    console.error('Error converting image:', err);
    return;
  }
  fs.writeFileSync(outputFile, svg);
  console.log(`Successfully converted ${inputFile} to ${outputFile}`);
});
