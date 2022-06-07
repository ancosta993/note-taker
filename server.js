const express = require('express');
const path = require('path');
const notes = require('./db/db.json')

const app = express();

// static files
app.use(express.static('public'));

// send notes api for saving notes
app.get('/api/notes', (req, res) => {
   res.json(notes);
})

//add a post request route

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