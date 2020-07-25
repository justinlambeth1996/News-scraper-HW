const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: String,
  body: String
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;