var app = angular.module('templateApp', ['ui.router', 'ui.materialize']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

  /*
  ** ROOT
  */
  .state('root', {
    url: "/",
    templateUrl: "views/root.html",
    controller: 'RootCtrl'
  })

  /*
  ** TEST
  */
  .state('test', {
    url: "/test",
    templateUrl: "views/test.html",
    controller: 'TestCtrl'
  })

  /*
  ** 404
  */
  .state('404', {
    url: "/404",
    templateUrl: "views/404.html",
    controller: '404Ctrl'
  })

  /*
  ** Users
  */
  .state('users', {
    url: "/users",
    templateUrl: "views/users.html",
    controller: 'UsersCtrl'
  });

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/404');
});
