anguapp.controller('showQuesCtrl',function($scope,$location,$routeParams,quesFac,ansFac){
  $scope.quesA = [];
  $scope.quesId = $routeParams.id;
  $scope.index = function(){
    quesFac.indexOne($routeParams.id,function(data){
      $scope.quesA = data.data;
    });
  }
  $scope.index();
  $scope.likecount = function(ansid){
    ansFac.likecount(ansid,function(){
      $scope.index();
    });
  }
})
