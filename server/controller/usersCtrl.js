var mongoose = require('mongoose');
var userModel = mongoose.model('Users');
function UserController(){
  this.newUser = function(req,res){
    userModel.find({name:req.body.name},function(err,users){
      if(err){ console.log("ERROR: "+err); }
      else{
        if(users.length===0){
          console.log(users.length);
          userModel.create({name:req.body.name},function(err){
              if(err){console.log("ERROR:"+err);}
              else{ console.log("userAdded"); }
              })
            }
            res.json({status:true});
      }
    })
  }
}

module.exports = new UserController();
