const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
  if (err) throw err;
});

const src = path.resolve(__dirname, 'files');
const dest = path.resolve(__dirname, 'files-copy');

fs.readdir(dest, (err, files) => {
  if (err) throw err;
files.forEach((file) => {
  fs.unlink(path.join(dest, file), (err) => {
      if (err) throw err;
    });
})
});

fs.readdir(src, (err, items) => {
  if (err) throw err;
  items.forEach((item) => {
    const currentPath = path.resolve(src, item);
    const destPath = path.resolve(dest, item);
    fs.copyFile(currentPath, destPath, (err) => {
      if (err) throw err;
    });
  });
});
