const os = require('os');
const fs = require('fs');

setInterval(() => {
  const info = `
  CPU: ${os.cpus()[0].model}
  Memory: ${os.totalmem() / (1024 * 1024)} MB
  Platform: ${os.platform()}
  Timestamp: ${new Date().toISOString()}
  -------------------------
  `;

  fs.appendFile('systemLog.txt', info, (err) => {
    if (err) throw err;
    console.log('System info logged.');
  });
}, 5000);