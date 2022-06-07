const express = require('express');
const path = require('path');
const notes = require('./db/db.json');
const fs = require('fs');

const app = express();


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// static files
app.use(express.static('public'));

// send notes api for saving notes
app.get('/api/notes', (req, res) => {
   res.json(notes);
})

//add a post request route
app.post('/api/notes', (req, res) => {
   req.body.id = notes.length.toString();
   notes.push(req.body);
   fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify({ note: notes }, null, 2));
   res.json(notes);
   res.json(req.body);
});

// send notes.html
app.get('/notes', (req, res) => {
   res.sendFile(path.join(__dirname, './public/notes.html'))
});

// wildcard route. send index.html
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(3001, () => {
   console.log('Server initiated in port 3001')
});