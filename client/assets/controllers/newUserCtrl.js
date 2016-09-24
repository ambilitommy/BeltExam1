anguapp.controller('newUserCtrl',function($scope,$location,newUserFac){
  $scope.newUser = function(){
    newUserFac.newUser($scope.user,function(){
      $location.path('/dashboard');
    })
  }
})
