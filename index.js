// require express (this is same as importing)
const express = require('express');
const ctrl = require('./controller');

// create an instance of express and save to a variable
const app = express();

// parse JSON into JavaScript using middleware
app.use(express.json());

// Endpoints
app.get('/api/movies', ctrl.getMovies);
app.get('/api/movie/:id', ctrl.getSingleMovie);
app.post('/api/movie', ctrl.addMovie);
app.put('/api/movie/:id', ctrl.updateRating);
app.delete('/api/movie/:id', ctrl.deleteMovie);

// define where the server should listen for requests
app.listen(3333, () => console.log('Server is running on 3333'));