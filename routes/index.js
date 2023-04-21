var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Whatisnext.in' });
});


router.get('/courses', function(req, res, next) {
  res.render('courses', { title: 'Whatisnext.in'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Whatisnext.in' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Whatisnext.in' });
});

router.get('/Registration', function(req, res, next) {
  res.render('Registration-form', { title: 'Whatisnext.in' });
});

router.get('/booking', function(req, res, next) {
  res.render('booking', { title: 'Whatisnext.in' });
});

module.exports = router;
