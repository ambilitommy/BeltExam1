anguapp.factory('ansFac',function($http){
  factory ={};
    factory.newAns = function(quesid,answertoadd,callback){
       $http.post('/newans/'+quesid ,answertoadd).then(function(returnedData){
         callback();
       })
    }
    factory.likecount = function(ansid,callback){
      $http.post('/likecount',{ansid:ansid}).then(function(returnedData){
        callback();
      })
    }
  return factory;
})
