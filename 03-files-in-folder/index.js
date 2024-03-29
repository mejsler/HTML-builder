const fs = require('fs');
const path = require('path');
let folderName = path.resolve(__dirname, 'secret-folder');

fs.readdir(folderName, (err, items) => {
  if (err) throw err;
  items.forEach((item) => {
    const itemPath = path.join(folderName, item);
    fs.stat(itemPath, (err, stats) => {
      if (err) throw err;
      if (stats.isFile()) {
        console.log(
          `${path.parse(item).name} - ${path
            .extname(item)
            .replace(/\./g, '')} - ${stats.size / 1000}kb`,
        );
      }
    });
  });
});
