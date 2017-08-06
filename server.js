var express = require('express'),
    app = express(),
    router = express.Router(),
    path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', (req,res) => {
  res.sendFile(path + 'index.html');
});

router.get('/about', (req,res) => {
  res.sendFile(path + 'about.html');
});

router.get('/contact', (req,res) => {
  res.sendFile(path + 'contact.html');
});

app.use('/', router);

app.use('*',(req,res) => {
  res.sendFile(path + '404.html');
});

app.listen(3000,() => {
  console.log('Live at port 3000');
});
