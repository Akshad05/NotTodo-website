const mongoose = require("mongoose");

const notTodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  acknowledgment: [
    {
      userEmail: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
  ],
});

const List = mongoose.model("NOTTODO", notTodoSchema);
module.exports = List;
