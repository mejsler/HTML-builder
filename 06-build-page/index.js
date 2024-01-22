const fs = require('fs');
const path = require('path');
const distPath = path.join(__dirname, 'project-dist');
const src = path.resolve(__dirname, 'styles');

fs.mkdir(distPath, { recursive: true }, (err) => {
  if (err) throw err;
});

const writeStream = fs.createWriteStream(path.join(distPath, 'style.css'));

fs.readdir(src, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    const filePath = path.join(src, file);
    fs.stat(filePath, (err, stats) => {
      if (err) throw err;
      if (stats.isFile() && path.extname(file) === '.css') {
        const readStream = fs.createReadStream(filePath, {
          encoding: 'utf8',
        });
        readStream.on('data', (chunk) => {
          writeStream.write(chunk);
        });
      }
    });
  });
});

const srcAssets = path.resolve(__dirname, 'assets');
const destAssets = path.resolve(__dirname, 'project-dist', 'assets');

const copyRecursive = (src, dest) => {
  fs.readdir(src, (err, items) => {
    if (err) throw err;
    items.forEach((item) => {
      const srcPath = path.join(src, item);
      const destPath = path.join(dest, item);
      fs.stat(srcPath, (err, stats) => {
        if (err) throw err;
        if (stats.isDirectory()) {
          fs.mkdir(destPath, { recursive: true }, (err) => {
            if (err) throw err;
            copyRecursive(srcPath, destPath);
          });
        } else {
          fs.copyFile(srcPath, destPath, (err) => {
            if (err) throw err;
            console.log(`Copied file: ${srcPath} to ${destPath}`);
          });
        }
      });
    });
  });
};

copyRecursive(srcAssets, destAssets);

console.log('06-build-page is not done yet, please give me some time to finish before reviewing 🙌🏻')