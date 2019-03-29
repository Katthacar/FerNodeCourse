// Requires
const fs = require('fs');
const colors = require('colors');

const writer = (data, path) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(err);
      resolve(`The file ${path} has been saved!`.zebra);
    });
  });
}

module.exports = {
  writer
}
