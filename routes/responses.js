let express = require('express');
let router = express.Router();

router.get('/:id', function(req, res, next) {
  let id = parseInt(req.params.id);
  let toReturn;

  let responses = [{
      id: 1,
      responses: ['1', '2', '3', '4', 'More than 4']
  },
  {
      id: 2,
      responses: ['1', '2', '3', '4', 'More than 4']
  }];

  responses.forEach(function(response) {
      if (response.id === id)
          toReturn = response.responses;
  });

  if (toReturn)
    res.json(toReturn);

  else {
      res.status(500).send({ error: 'Unable to find responses associated with this question' })
  }

});


router.post('/', function(req, res, next) {
  console.log(req);
});

module.exports = router;
