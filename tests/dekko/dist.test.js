'use strict';

const $ = require('dekko');

$('dist')
  .isDirectory()
  .hasFile('react-lu-design.css')
  .hasFile('react-lu-design.min.css')
  .hasFile('react-lu-design.js')
  .hasFile('react-lu-design.min.js');

console.log('`dist` directory is valid.');
