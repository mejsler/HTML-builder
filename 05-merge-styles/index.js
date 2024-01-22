const fs = require('fs');
const path = require('path');
const src = path.resolve(__dirname, 'styles');
const writeStream = fs.createWriteStream(
  path.join(__dirname, 'project-dist', 'bundle.css'),
);

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
