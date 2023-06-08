console.log('starting browser testing server')
const express = require('express')
const fs = require("fs")
const app = express()
const port = 4567
const testsDir = "./"
let testfiles = [];
let enableCORS = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, token, Content-Length, X-Requested-With, *');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};
app.all("/*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, token, Content-Length, X-Requested-With, *');
  next();
});
app.use(enableCORS);
app.get('/testingfiles', (req, res) => {
  fs.readdir(testsDir, (err, files) => {
    files.forEach(file => {
      if (file !== "index.html" && file.includes('.html') ) {
        testfiles.push(file);
      }
    });
  });
  JSON.stringify(testfiles);
  res.json(testfiles);
  testfiles.length = 0;
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})