'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'MarkupCtrl'
  });
}])

.controller('MarkupCtrl', ['$scope', 'markupAmounts', function($scope, markupAmounts) {
// returned scope object w/ markup values

$scope.markups = {
  startRate: 1299.99, // inital value
  numberOfPeople: 3, //

  price: function(){
    var flatRateCalculation = markupAmounts.flatRate(this.startRate)
    return flatRateCalculation
  },
  people: function(){
    var numberOfPeople = this.numberOfPeople;
    var peopleCalculation = markupAmounts.noOfPeople(this.numberOfPeople, this.startRate);
    return peopleCalculation;
  },
  isFood: function(){
    // so if food has been checked.. do calculation aka use our foodCost service method
    if($scope.foodSelected === true){
      var foodMarkupCost = markupAmounts.foodCost(this.startRate);
      return foodMarkupCost;
    }
    else{
      return foodMarkupCost = 0;
    }
  }
}

}])
.service('markupAmounts', function(){
  //values calculation functions
// flat rate = job markup 5% + initial cost
  var flatRate = function(startRate){
    var getStartRate = {
      startRate: startRate
    };
    var jobCostCalculation = startRate * .05;
    return jobCostCalculation
  }

  var noOfPeople = function(numberOfPeople, startRate){
    var getMarkups = {
      startRate:startRate,
      numberOfPeople:numberOfPeople
    }
    var peopleCalculation = (parseFloat(flatRate(startRate)) + parseFloat(startRate)) *  (numberOfPeople * 0.012);

    return peopleCalculation
  }

  var foodCost = function(startRate){
    var getStartRate = {
      startRate:startRate
    }
    var foodMarkupCost = .13 * startRate + startRate
    return foodMarkupCost;
  }

return {
  flatRate: flatRate,
  noOfPeople: noOfPeople,
  foodCost: foodCost
}

})
