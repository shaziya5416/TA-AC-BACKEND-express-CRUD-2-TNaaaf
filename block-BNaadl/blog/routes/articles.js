var express = require('express');
var router = express.Router();

var Article = require("../models/Article/")

/* GET articles listing. */
router.get('/', (req,res,next)=>{
  Article.find({},(err,articles)=>{
     if (err) return next(err);
     res.render("articleList",{articles});
  })
});

module.exports = router;
