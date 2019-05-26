console.clear();
const { spawn, fork } = require('child_process');
const { exec, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// const tsc = spawn('cd .. && npm run tsc');
// exec('cd .. | tsc', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });

/*_____________CONTEXT_______________ */
process.env.ASSET_PATH = 'Heloooo'
const CONTEXT = path.resolve(__dirname, '../');
console.log('CONTEXT = ', CONTEXT);
const ASSET_PATH = process.env.ASSET_PATH || '/';
console.log('ASSET_PATH = ', ASSET_PATH);
/* __________ENTRY__POINT_____________*/
// const $ENTRY = './src/index.js'
const dir = './dist';
if (fs.existsSync(dir)){
  execSync(`rm -rf ${CONTEXT}/dist`);
  //fs.rmdirSync(dir)
}
fs.mkdirSync(dir);

const tscRunnerOptions = {
  cwd: `${CONTEXT}`,
  detached: true,
};

// const Id = exec('tsc',['-v'],()=>console.log('rgegbetbte'));
// console.log(Id);

const tsc = exec('tsc');
//const tsc = fork(`${CONTEXT}/node_modules/typescript/bin/tsc`);
//console.log(tsc)

// const tsc = spawn('tsc', ['./src/index.ts']);

// tsc.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// tsc.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// tsc.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });