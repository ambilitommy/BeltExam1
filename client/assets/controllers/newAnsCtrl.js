anguapp.controller('newAnsCtrl',function($scope,$location,$routeParams,quesFac,ansFac){
    $scope.quesA = [];
    $scope.index = function(){
      quesFac.indexOne($routeParams.id,function(data){
        $scope.quesA = data.data;
      });
    }
    $scope.index();
    $scope.newAns = function(){
       ansFac.newAns($routeParams.id,$scope.ans,function(){
         $location.path('/dashboard');
        })
    }

})
