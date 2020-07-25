var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  
  title: {
    type: String,
    required: true,
    unique: true,
  },
  
  link: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    required: true,
    default: false,
  },

  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
});


var Article = mongoose.model("Article", ArticleSchema);
Article.on('index', function (err) {
  if (err) console.error(err);
});

module.exports = Article;
