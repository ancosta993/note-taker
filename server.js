const express = require('express');
// const path = require('path');
// const notes = require('./db/db.json');
// const fs = require('fs');

const app = express();
PORT = process.env.PORT || 3001;


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// static files
app.use(express.static('public'));

// connect and mount the routes
app.use('/api', require('./routes/apiRoutes'));
app.use('/', require('./routes/htmlRoutes'));

app.listen(PORT, () => {
   console.log(`Server initiated in port ${PORT}`)
});