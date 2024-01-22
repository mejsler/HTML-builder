const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, 'styles');
const writeStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

fs.readdir(src, (err, files) => {
  if (err) console.log(err);
  files.forEach((file) => {
    const filePath = path.join(src, file);
    fs.stat(filePath, (err, stats) => {
      if (err) console.log(err);
      if (stats.isFile() && path.extname(file) === '.css') {
        console.log(`${path.parse(file).name}`);
      }
    });
  });
});

    writeStream.write(`${answer}\n`);
