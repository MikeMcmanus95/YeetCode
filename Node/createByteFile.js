const fs = require('fs');
const path = require('path');

function createByteFile(filename) {
  const filepath = path.join(__dirname, filename);
  try {
    const outputString = createOutputString(filepath);
    const newFileName = 'bytes_' + filename;
    fs.writeFileSync(newFileName, outputString);
  } catch (err) {
    console.error(err);
  }
}

function createOutputString(filename) {
  const requestsFile = fs.readFileSync(filename, 'utf8').split('\n');
  let largeFileCount = 0;
  let totalBytes = 0;

  for (let request of requestsFile) {
    let currentBytes = '';
    let requestIdx = request.length - 1;
    while (request[requestIdx] && request[requestIdx] !== ' ') {
      currentBytes = request[requestIdx] + currentBytes;
      requestIdx--;
    }
    currentBytes = Number(currentBytes);
    if (currentBytes > 5000) {
      largeFileCount++;
      totalBytes += currentBytes;
    }
  }
  return `${largeFileCount}\n${totalBytes}`;
}
console.log(createByteFile('hosts_access_log001.txt'));
