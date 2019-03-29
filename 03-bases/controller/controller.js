// Requires
const { writer } = require('./../writer/writer');

const createMult = (base, start, limit, path) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) reject('Must be a Number');
    else {
      let mults = table(base, start, limit);
      resolve(writer(mults, `${path}/Mult-${base}.txt`));
    }
  });
}

const showMult = (base, start, limit) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) reject('Must be a Number');
    else resolve(table(base, start, limit));
  })
}

const table = (base, start, limit) => {
  let mults = '';
  for (let i = start; i <= limit; i++) {
    mults += `${base} * ${i} = ${base * i}\n`;
  }
  return mults;
}

module.exports = {
  createMult,
  showMult
}
