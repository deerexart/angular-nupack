'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'MarkupCtrl'
  });
}])

.controller('MarkupCtrl', [function() {
// returned scope object w/ markup values
}])
.service('markupAmounts', function(){
  //values calculation functions
})
