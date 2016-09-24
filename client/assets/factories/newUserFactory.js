anguapp.factory('newUserFac',function($http){
  console.log("entered fac");
  factory ={};
  factory.username = '';
    factory.newUser = function(usertoadd,callback){
      factory.username = usertoadd.name;
      $http.post('/newUser',usertoadd).then(function(returnedData){
          callback();
      })
    }
  return factory;
})
