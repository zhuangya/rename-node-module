'use strict';

const { writeFileSync } = require('fs');

const getPkg = json => {
  try {
    return require(json);
  } catch (e) {
    console.error('[ERROR READING]', e);
    process.exit(1);
  };
};

module.exports = (name, dir) => {
  const targetPkgJson = `${dir}/package.json`;
  try {
    const pkg = getPkg(targetPkgJson);
    pkg.name = name;
    writeFileSync(targetPkgJson, JSON.stringify(pkg, null, '  '));

    return pkg;
  } catch(e) {
    console.log('[ERROR WRITING]', e);
    process.exit(1);
  }
};

