import { generateFromFile } from 'react-to-typescript-definitions';
import * as componentLibrary from '../lib/index.js';

const fs = require('fs');

let definitionsContent = '';
const components = Object.keys(componentLibrary);

components.forEach((component) => {
  if (typeof componentLibrary[component] === 'function' && componentLibrary[compoennt].filename !== undefined) {
    const definitions = generateFromFile(
      null,
      componentLibrary[component].filename,
      {},
      'react'
    );

    definitionsContent = `${definitionsContent}${definitions}`;
  }
});

fs.writeFileSync('../dist/sage-lib.d.ts', definitionsContent);
