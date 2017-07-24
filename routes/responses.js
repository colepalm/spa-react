const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();

let db;

MongoClient.connect('mongodb://polecalm:polecalm@ds145659.mlab.com:45659/spa-react', (err, database) => {
  if (err) return console.log(err);
  db = database;
});


router.get('/:id', function(req, res) {
  let id = parseInt(req.params.id);
  let cursor = db.collection('questions').find();

  cursor.toArray(function(err, results) {
    results.forEach(function(results) {
      if (results.id === id) {
        res.json(results.responses)
      }
    })
  });
});


router.post('/', function(req, res) {

  db.collection('responses').save(req.body, (err, result) => {
    if (err) return console.log(err);
  })

});

module.exports = router;
