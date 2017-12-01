// GET '/' Displays all of the mongooses.
// GET '/mongooses/new' Displays a form for making a new mongoose.
// POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
// GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
// GET '/mongooses/:id' Displays information about one mongoose.

// POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
// POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.

var dogs = require('../controllers/dogs');

module.exports = function(app){
  app.get('/', dogs.index);
  app.get('/dogs/new', dogs.new);
  app.post('/dogs', dogs.add);
  app.get('/dogs/edit/:id', dogs.edit); // shows form to edit a dog
  app.get('/dogs/:id', dogs.show);
  app.post('/dogs/:id', dogs.update); // action attribute for edit form

  app.get('/dogs/destroy/:id', dogs.destroy);
}
