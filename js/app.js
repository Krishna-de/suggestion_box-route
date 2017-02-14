var app = angular.module('SuggestionBox',['ngRoute', ]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    })
    .when('/comment/:id', { 
     controller: 'CommentController', 
     templateUrl: 'views/comment.html'    
     })
 
    .otherwise({ 
      redirectTo: '/' 
    }); 
  $locationProvider.hashPrefix('');
});
