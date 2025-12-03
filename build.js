const fs = require('fs');

const DEV_HTML_PATH = './index.html';
const PROD_HTML_PATH = './dist/index.html';
const PROD_SCRIPT_TAG = '<script defer src="./src/index.min.js" type="text/javascript"></script>';

// A regular expression to find the block of script tags in your HTML.
// This matches everything between <!-- DEV_SCRIPTS_START --> and <!-- DEV_SCRIPTS_END -->
const DEV_SCRIPTS_REGEX = /<!-- DEV_SCRIPTS_START -->[\s\S]*?<!-- DEV_SCRIPTS_END -->/g;

fs.readFile(DEV_HTML_PATH, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file from ${DEV_HTML_PATH}:`, err);
    return;
  }

  // Replace the development block with the production script tag
  const result = data.replace(DEV_SCRIPTS_REGEX, PROD_SCRIPT_TAG);

  fs.writeFile(PROD_HTML_PATH, result, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file to ${PROD_HTML_PATH}:`, err);
      return;
    }
    console.log('Production HTML file successfully created in /dist/index.html');
  });
});
