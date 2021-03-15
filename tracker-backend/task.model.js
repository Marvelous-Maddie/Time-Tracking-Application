const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  duration: { type: String, required: true },
  timestamp: {type: Date, required: true},
  description: { type: String, required: true },
});

taskSchema.index({ description: 'text' });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;