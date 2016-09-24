anguapp.factory('quesFac',function($http){
  factory ={};
    factory.newQues = function(questoadd,callback){
      $http.post('/newques',questoadd).then(function(returnedData){
          callback();
      })
    }
    factory.index = function(callback){
      $http.get('/index').then(function(returnedData){
        console.log(returnedData);
          callback(returnedData);
      })
    }
    factory.indexOne = function(quesid,callback){
      $http.get('/index/'+quesid).then(function(returnedData){
        console.log(returnedData);
          callback(returnedData);
      })
    }
  return factory;
})
