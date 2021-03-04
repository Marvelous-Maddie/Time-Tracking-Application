const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
let Task = require('./task.model');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get('/', (req, res) => {
    Task.find().sort( {timestamp: 'desc'})
      .then(tasks => res.json(tasks))
      .catch(err => res.status(400).json('Error: ' + err));
  });

app.get('/find/:query', (req, res) => {
    const query = req.params.query;

    Task.find({ $text: { $search: query }})
     .then(tasks => res.json(tasks))
     .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/addTask', (req, res) => {
    const duration = req.body.duration;
    const description = req.body.description;
    const timestamp = req.body.timestamp;
  
    const newTask = new Task({
      duration,
      description,
      timestamp
    });
  
    newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});