anguapp.controller('dashboardCtrl',function($scope,$routeParams,$location,newUserFac,quesFac){
  $scope.username = newUserFac.username;
  $scope.ques =[];
  $scope.index = function(){
    quesFac.index(function(data){
      $scope.ques = data.data;
    });
  }
   $scope.index();
})
