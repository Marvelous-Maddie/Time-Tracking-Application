const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  hours: { type: Number, required: true },
  minutes: { type: Number, required: true },
  seconds: { type: Number, required: true },
  timestamp: {type: Date, required: true},
  description: { type: String, required: true },
});

taskSchema.index({ description: 'text' });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;