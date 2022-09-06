const {
  resolve,
  extname,
  basename
} = require('path');
const {
  existsSync,
  lstatSync,
  readdirSync
} = require('fs');

function readFileList(parentName, dir) {
  const fileList = [];
  const dirPath = resolve(`./docs/${parentName}/${dir}`);
  const isDir = existsSync(dirPath)
  if (!isDir) {
    return fileList;
  }
  const files = readdirSync(dirPath);
  files.forEach((item) => {
    const filename = basename(item, extname(item));
    const names = filename.split('-')
    const name = names[1] ? names[1] : names[0]
    if (filename && name && extname(item).includes('.md')) {
      fileList.push([
        `${dir}/${filename}`,
        `${name}`
      ]);
    }
  });
  return fileList;
}

module.exports = readFileList;