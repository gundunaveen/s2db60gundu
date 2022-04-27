
var express = require('express');
const juice_controlers= require('../controllers/juice');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('juice', { title: 'Search Results juice class' });
});



//var express = require('express');
//const juice_controlers= require('../controllers/juice');
var router = express.Router();
/* GET costumes */
router.get('/', juice_controlers.juice_view_all_Page );
module.exports = router;

module.exports = router;

/* GET detail bakery page */
router.get('/detail', juice_controlers.juice_view_one_Page);

/* GET create bakery page */
router.get('/create',secured, juice_controlers.juice_create_Page);
//router.get('/create',juice_controlers.juice_create_Page);


/* GET create update page */
router.get('/update',secured, juice_controlers.juice_update_Page);
//router.get('/update',juice_controlers.juice_update_Page);

/* GET create bakery page */
router.get('/delete',secured, juice_controlers.juice_delete_Page);

//router.get('/delete',juice_controlers.juice_delete_Page);

