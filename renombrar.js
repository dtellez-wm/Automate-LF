const fs = require('fs');
const path = require('path');

const folderPath = './iconos';
const prefix = '7ff97c575adfd4576e131ac12aa879f26065e274_';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(file => {
    if (file.startsWith(prefix) && path.extname(file) === '.svg') {
      const oldPath = path.join(folderPath, file);
      const newName = file.replace(prefix, '');
      const newPath = path.join(folderPath, newName);

      fs.rename(oldPath, newPath, err => {
        if (err) {
          console.error(`Error al renombrar el archivo "${file}":`, err);
        } else {
          console.log(`Archivo "${file}" renombrado a "${newName}"`);
        }
      });
    }
  });
});
