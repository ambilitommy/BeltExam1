
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var ansSchema = new mongoose.Schema({
  answer: {type:String, min:[5, "require atleast 5 characters"]},
  details: String,
  like_count: Number,
  _ques:{type:schema.Types.ObjectId, ref:'Ques'}
});
mongoose.model('Ans',ansSchema);
