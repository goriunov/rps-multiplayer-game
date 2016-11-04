var express = require('express');
var router = express.Router();


router.get('/' , function(req ,res ,next){
  res.render('index');
});

router.get('/name/*' , function(req ,res ,next){
  res.redirect(req.protocol + '://' + req.get('host') +'/');
});

router.get('/players-list/' , function(req ,res ,next){
  res.redirect(req.protocol + '://' + req.get('host') +'/');
});

router.get('/game/' , function(req ,res ,next){
  res.redirect(req.protocol + '://' + req.get('host') +'/');
});

router.get('/*' , function(req ,res ,next){
  res.status(404).send('No such a page 404 :{0}');
  res.end();
});


module.exports = router;
