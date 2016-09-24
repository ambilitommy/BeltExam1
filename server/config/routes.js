var users = require('./../controller/usersCtrl.js');
 var ques = require('./../controller/quesCtrl.js');
var ans = require('./../controller/ansCtrl.js');
module.exports = function(app){
  app.post('/newUser',users.newUser);
  app.post('/newques',ques.newQues);
  app.get('/index',ques.index);
  app.get('/index/:id',ques.indexOne);
  app.post('/newans/:id',ans.newAns);
  app.post('/likecount',ans.likecount);
}
