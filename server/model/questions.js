
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var quesSchema = new mongoose.Schema({
  question: {type:String,min:[10, "require atleast 10 characters"]},
  username: String,
  ans_count: Number,
  descr: String,
  ans: [{type: schema.Types.ObjectId , ref:'Ans'}]
});
mongoose.model('Ques',quesSchema);
