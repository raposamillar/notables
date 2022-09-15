const { writeFile } = require('fs');
const router = require('express').Router();
let store = require('../db/db.json');
const { v1: uuid1 } = require('uuid');

router.get('/notes', (req, res) => res.json(store));

router.post('/notes', (req, res) => {
  req.body.id = uuid1();

  store.push(req.body)
  writeFile('./db/db.json', JSON.stringify(store), err => {
    if (err) throw err;
    res.json(store);
  })
});

router.delete('/notes/:id', (req, res) => {
  store = store.filter(obj => obj.id != req.params.id);

  writeFile('./db/db.json', JSON.stringify(store), err => {
    if (err) throw err;
    res.json(store);
  })
});

module.exports = router;
