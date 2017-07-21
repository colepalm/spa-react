let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    responses: ['1', '2', '3', '4', 'More than 4']
  }]);
});

module.exports = router;
