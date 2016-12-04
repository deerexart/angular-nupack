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
// var startRate = {startRate:0};

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
    else{ return foodMarkupCost = 0; }
  },
  isPharm: function(){
    if($scope.pharmSelected === true){

      var pharmMarkupCost = markupAmounts.pharmCost(this.startRate);
      return pharmMarkupCost;
    }
    else{
      return pharmMarkupCost = 0;
    }
  },
  isElectronic: function(){
   if($scope.electronicSelected === true){
     var electronicMarkupCost = markupAmounts.electronicCost(this.startRate);
     return electronicMarkupCost;
   }
   else{
     return electronicMarkupCost = 0;
   }

 },
 finalCost: function(){
   //do i want to do calculation here or in service ... **
   // come back to this once it works.
   return parseFloat($scope.markups.price())
   + parseFloat($scope.markups.people())
   + parseFloat($scope.markups.isFood())
   + parseFloat($scope.markups.isPharm())
   + parseFloat($scope.markups.isElectronic())
   + parseFloat(this.startRate)
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
    var getStartRate = {
      startRate:startRate,
      numberOfPeople:numberOfPeople
    }
    var peopleCalculation = (parseFloat(flatRate(startRate)) + parseFloat(startRate)) *  (numberOfPeople * 0.012);

    return peopleCalculation
  }

  var foodCost = function(startRate){
      // getStartRate(parseFloat(startRate));
    var getStartRate = {
      startRate:startRate
    }
    var foodMarkupCost = .13 * (parseFloat(flatRate(startRate)) + parseFloat(startRate)) ;
    return foodMarkupCost;
  }

  var pharmCost = function(startRate){
   var getStartRate = {
     startRate:startRate
   }

       var pharmMarkupCost = (7.5/100) * (parseFloat(flatRate(startRate)) + parseFloat(startRate)) ;
       return pharmMarkupCost;
  }

  var electronicCost = function(startRate){
   var getStartRate = {
     startRate:startRate
   }

   var electronicMarkupCost = 0.02 * (parseFloat(flatRate(startRate)) + parseFloat(startRate));
   return electronicMarkupCost;
  }


return {
  flatRate: flatRate,
  noOfPeople: noOfPeople,
  foodCost: foodCost,
  pharmCost: pharmCost,
  electronicCost: electronicCost
}

})
