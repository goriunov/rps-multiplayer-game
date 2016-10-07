var express = require('express');
var router = express.Router();


router.get('/' , function(req ,res ,next){
  res.render('index');
});


module.exports = router;


//"../node_modules/jquery/dist/jquery.js"
//"../node_modules/bootstrap/dist/js/bootstrap.js",
