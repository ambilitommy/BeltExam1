var mongoose = require('mongoose');
//var userModel = mongoose.model('Users');
var ansModel = mongoose.model('Ans');
var quesModel = mongoose.model('Ques');
function AnsController(){
  this.newAns = function(req,res){
    console.log(req.body);
  quesModel.findOne({_id:req.params.id},function(err,quesdata){
    if(err){
      console.log(err);
    }
    else{
      var answer = new ansModel({answer:req.body.ans,details:req.body.descr,like_count:0}); //object with body detail corresponding to comments model
      answer._ques = quesdata._id;
       answer.save(function(err,msg){
         if(err){console.log("ERROR: "+err);}
         else{
          quesdata.ans.push(answer); //entering new msg data into messages model
          quesdata.ans_count += 1;
          quesdata.save(function(err){
            if(err){ console.log(err); }
            else{
              console.log("added data");
              res.json(msg);
            }
          })
        }
      })
    }
  })
    }
this.likecount = function(req,res){
  console.log(req.body.ansid);
  ansModel.findOne({_id:req.body.ansid},function(err,ansdata){
    if(err){ console.log("ERROR: "+err); }
    else{
      console.log(ansdata);
      var likes = ansdata.like_count + 1;
      ansModel.update({_id:req.body.ansid},{$set:{like_count:likes}},function(err,msg){
        if(err){ console.log("ERROR: "+err); }
        else{ res.json(msg); }
      })
    }
  })
}
}
module.exports = new AnsController();
