var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Event Generator' });
    console.log(req.url);
});

router.post("/", () => {

});

module.exports = router;
