const fs = require('fs');

// Read file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Count words
  const wordCount = data.trim().split(/\s+/).length;

  // Write count to new file
  fs.writeFile('wordCount.txt', `Word Count: ${wordCount}`, (err) => {
    if (err) throw err;
    console.log('Word count written to wordCount.txt');
  });
});