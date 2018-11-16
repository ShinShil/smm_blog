var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home');
});

router.get('/author', function (req, res, next) {
  res.render('author');
})

router.get('/home', function(req, res, next) {
  res.render('home');
})

router.get('/posts', function (req, res, next) {
  res.render('posts', {
    posts: [
      {
        title: 'Post 1',
        text: 'qqweqwe'
      },
      {
        title: 'Post 2',
        text: 'Rendering'
      }
    ]
  });
});

module.exports = router;
