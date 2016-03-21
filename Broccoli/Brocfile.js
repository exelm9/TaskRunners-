
// loads Broccoli plugins defined in package.json file 
var BroccoliSass = require('broccoli-sass'),
    BroccoliMergeTrees = require('broccoli-merge-trees'),
    cssTree;

// output styles/styles.scss to output/styles/app.css
var cssTree = new BroccoliSass(
  ['styles'], 
  'styles.scss', 
  'styles/main.css');

// merge into a single tree and export 
module.exports = new BroccoliMergeTrees([cssTree]);

