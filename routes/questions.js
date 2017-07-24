const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();

MongoClient.connect('mongodb://polecalm:polecalm@ds145659.mlab.com:45659/spa-react', (err, database) => {
  if (err) return console.log(err);
  db = database;
});

router.get('/', function(req, res) {
  let questions = [];
  let cursor = db.collection('questions').find();

  cursor.toArray(function(err, results) {
    results.forEach(function(result) {

      questions.push({
        contents: result.question,
        id: result.id
      });

    });

    res.json(questions);
  });
});

module.exports = router;
