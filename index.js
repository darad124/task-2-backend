require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const personSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  // Add other fields as necessary and validate them
});

const Person = mongoose.model('Person', personSchema);

// Middleware for error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// CREATE: Adding a new person
app.post('/api', async (req, res, next) => {
  try {
    const person = new Person({
      name: req.body.name,
      email: req.body.email,
      // Add other fields as necessary
    });
    const result = await person.save();
    res.status(201).json(result);
  } catch (error) {
    next(error); // Pass the error to the error handler middleware
  }
});

// READ: Fetching details of a person
app.get('/api/:id', async (req, res, next) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      res.status(404).send('Person not found');
    } else {
      res.json(person);
    }
  } catch (error) {
    next(error); // Pass the error to the error handler middleware
  }
});

// UPDATE: Modifying details of an existing person
app.put('/api/:id', async (req, res, next) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      // Update other fields as necessary
    }, { new: true });

    if (!person) {
      res.status(404).send('Person not found');
    } else {
      res.json(person);
    }
  } catch (error) {
    next(error); // Pass the error to the error handler middleware
  }
});

// DELETE: Removing a person
app.delete('/api/:id', async (req, res, next) => {
  try {
    const person = await Person.findByIdAndRemove(req.params.id);

    if (!person) {
      res.status(404).send('Person not found');
    } else {
      res.json(person);
    }
  } catch (error) {
    next(error); // Pass the error to the error handler middleware
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
