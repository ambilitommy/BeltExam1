var mongoose = require('mongoose');
//var userModel = mongoose.model('Users');
var quesModel = mongoose.model('Ques');
function QuesController(){
  this.newQues = function(req,res){
    quesModel.create({question:req.body.ques,username:req.params.name,ans_count:0,
      descr:req.body.descr},function(err){
        if(err){
          console.log("ERROR "+err);
          res.json(err);
        }
        else{
          res.json({status:true});
        }
      })
  }
  this.index = function(req,res){
    quesModel.find({},function(err,allques){
        if(err){
          console.log("ERROR "+err);
          res.json(err);
        }
        else{
          res.json(allques);
        }
      })
  }
  this.indexOne = function(req,res){
    quesModel.find({_id:req.params.id}).populate('ans').exec(function(err,quesA){
        if(err){
          console.log("ERROR "+err);
          res.json(err);
        }
        else{
          res.json(quesA);
        }
      })
  }

}

module.exports = new QuesController();
