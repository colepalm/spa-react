let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.json([{
        id: 1,
        contents: "How many people live in your household?"
    }]);
});

module.exports = router;
