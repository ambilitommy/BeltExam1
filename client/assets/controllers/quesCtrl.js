anguapp.controller('quesCtrl',function($scope,$location,quesFac){
  $scope.newQues = function(){
     quesFac.newQues($scope.ques,function(){
       $location.path('/dashboard');
     })
  }
})
