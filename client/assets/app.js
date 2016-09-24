var anguapp = angular.module('anguapp',['ngRoute']);
anguapp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl : 'partials/newUser.html',
      controller : 'newUserCtrl'
    })
    .when('/dashboard',{
      templateUrl : 'partials/dashboard.html',
      controller : 'dashboardCtrl'
    })
    .when('/newques',{
      templateUrl : 'partials/ques.html',
       controller : 'quesCtrl'
    })
    .when('/question/:id',{
      templateUrl : 'partials/showQues.html',
       controller : 'showQuesCtrl'
    })
    .when('/question/:id/new_answer',{
      templateUrl : 'partials/newAns.html',
       controller : 'newAnsCtrl'
    })
});
