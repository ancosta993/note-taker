const router = require('express').Router();
const fs = require('fs');
const path = require('path');
let { note } = require('../../db/db.json');

// send notes api for saving notes
router.get('/notes', (req, res) => {
   res.json(note);
});

//add a post request route
router.post('/notes', (req, res) => {
   req.body.id = note.length.toString();
   note.push(req.body);
   fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify({ note: note }, null, 2));
   // res.json(note);
   res.json(req.body);
});

// add a delete request route
router.delete('/notes/:id', (req, res) => {
   const id = req.params.id;

   note = note.filter(currNote => currNote.id !== id);
   
   fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify({ note: note }, null, 2));
   res.json(note);
});

module.exports = router;