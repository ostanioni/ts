const fs = require('fs');
const path = require('path');

/*_____________CONTEXT_______________ */
const CONTEXT = path.resolve(__dirname, '../');
const ASSET_PATH = process.env.ASSET_PATH || '/';
/* __________ENTRY__POINT_____________*/
const $ENTRY = './src/index.js'

const dir = './dist';
fs.rmdirSync(dir)
// fs.rmdir(path, callback) // Async
// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
// }

// fs.unlink('./dist', (err) => {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });