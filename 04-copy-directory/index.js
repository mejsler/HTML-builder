const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
  if (err) console.log(err);
});

const src = path.resolve(__dirname, 'files');
const dest = path.resolve(__dirname, 'files-copy');

fs.readdir(src, (err, items) => {
  if (err) console.log(err);
  items.forEach((item) => {
    const currentPath = path.resolve(src, item);
    const destPath = path.resolve(dest, item);
    fs.copyFile(currentPath, destPath, (err) => {
      if (err) console.log(err);
    });
  });
});
