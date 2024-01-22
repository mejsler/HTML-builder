const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
//   if (err) console.log(err);
// });

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
