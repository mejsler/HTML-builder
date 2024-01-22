const readline = require('readline');
const fs = require('fs');
const path = require('path');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
const writeStream = fs.createWriteStream(path.resolve(__dirname, 'text.txt'));

rl.on('close', () => console.log('Mission accomplished'));
rl.setPrompt(`Waiting for input (type 'exit' to close the program):\n`);
rl.prompt();
rl.on('line', (answer) => {
  if (answer === 'exit') {
    rl.close();
  } else {
    writeStream.write(`${answer}\n`);
  }
});