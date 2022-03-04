// reads from index.js files in their respective *Routes folders
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');

// set port as environment variable if it has been set, if not will default to port 80
const PORT = process.env.PORT || 3001;

const app = express();

// middleware functions
// make the files in public available to the server
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// tells the server which folder and router to look at based on the api endpoint
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});