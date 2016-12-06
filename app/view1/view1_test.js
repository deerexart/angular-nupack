'use strict';

describe('MarkupCtrl', function(){


    var $rootScope, $scope, $controller;
    var markupAmounts;
    var MarkupCtrl;
    var markups;

  beforeEach(module('myApp.view1'));

  beforeEach(inject(function(_$rootScope_, _$controller_, _markupAmounts_) {

       // I have learned that order is important
       // I also learned that case must match service injection case ..
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        markupAmounts = _markupAmounts_;


        MarkupCtrl = $controller('MarkupCtrl', {

            '$rootScope': _$rootScope_,
            '$scope':$scope,
            'markupAmounts':_markupAmounts_

        });

 }));

 beforeEach(function() {
   //mocking up scope object
     markups = {
       startRate: 1299.99,
       numberOfPeople: 3,
       price: Function,
       people: Function,
       isFood:Function,
       isElectronic:Function,
       isPharm: Function,
       finalCost:Function
     };
   });

 describe("MarkupCtrl controller to be definedddd", function() {


     it("MarkupCtrl controller should be defined", function () {
         expect(MarkupCtrl).toBeDefined();
     });
     it("$scope.markups should be defined ", function () {
         expect($scope.markups).toBeDefined();
     });
     //tests on scope object
     it("matches object type with the expect key/value pairs", function() {
         expect(markups).toEqual(jasmine.objectContaining({
           startRate: 1299.99
         }));
         expect(markups).not.toEqual(jasmine.objectContaining({
           price: ''
         }));
         expect(markups).toEqual(jasmine.objectContaining({
          //  startRate:Number, //will fail
           startRate:1299.99, // will pass
           numberOfPeople: 3,
           people: Function,
           price: Function,
           isFood: Function,
           isElectronic: Function,
           isPharm: Function,
           finalCost: Function
         }))
          expect(markups.startRate).toEqual(jasmine.any(Number));
          expect(markups.numberOfPeople).toEqual(jasmine.any(Number));
          expect(markups.people).toEqual(jasmine.any(Function));
          expect(markups.price).toEqual(jasmine.any(Function));
          expect(markups.isFood).toEqual(jasmine.any(Function));
          expect(markups.isElectronic).toEqual(jasmine.any(Function));
          expect(markups.isPharm).toEqual(jasmine.any(Function));
          expect(markups.finalCost).toEqual(jasmine.any(Function));
       });

       it("checking scope methods are returning correct values after they run",
       function(){
         var startRate = $scope.markups.startRate;
          $scope.foodSelected = true;

         expect($scope.markups.startRate).toBe(1299.99);
         expect($scope.markups.numberOfPeople).toBe(3);
         expect($scope.markups.price(startRate)).toBe(64.9995);
         expect($scope.markups.people(startRate)).toBe(49.139622);
       });
       it("isFood method will return 177.448635 if foodSelect is true", function(){
         var startRate = $scope.markups.startRate;
          $scope.foodSelected = true;
          expect($scope.markups.isFood(startRate)).toBe(177.448635);

       });
       it("isFood method will return 0 if foodSelect is false", function(){
         var startRate = $scope.markups.startRate;
          $scope.foodSelected = false;
          expect($scope.markups.isFood(startRate)).toBe(0);
       });
       it("IF FOODSELECTED IS TRUE *** isFood startRate will call service markupAmounts.foodCost", function(){
         var startRate = $scope.markups.startRate;
          $scope.foodSelected = true;
          spyOn(markupAmounts, 'foodCost');
          $scope.markups.isFood(startRate);
          expect(markupAmounts.foodCost).toHaveBeenCalledWith(startRate);

       });
      //  it('THIS TEST WILL FAIL $scope.foodSelected = false, foodCost will not be called', function(){
      //    var startRate = $scope.markups.startRate;
      //     $scope.foodSelected = false;
      //     spyOn(markupAmounts, 'foodCost');
      //     $scope.markups.isFood(startRate);
      //     //this should fail because food cost is only called when food checkbox ($scope.foodSelected) is selected (true);
      //     // since it is not, this should throw an error
      //     expect(markupAmounts.foodCost).toHaveBeenCalledWith(startRate);
       //
      //  });
       it(' $scope.foodSelected = false, foodCost will not be called', function(){
         var startRate = $scope.markups.startRate;
          $scope.foodSelected = false;
          spyOn(markupAmounts, 'foodCost');
          $scope.markups.isFood(startRate);
          expect(markupAmounts.foodCost).not.toHaveBeenCalledWith(startRate);

       });
       it("IF PHARMSELECTED IS TRUE *** isPharm startRate will call service markupAmounts.pharmCost", function(){
         //will pass
         var startRate = $scope.markups.startRate;
          $scope.pharmSelected = true;
          spyOn(markupAmounts, 'pharmCost');
          $scope.markups.isPharm(startRate);
          expect(markupAmounts.pharmCost).toHaveBeenCalledWith(startRate);

       });

       it("isPharm will return 102 if pharmSelect is true", function(){
         var startRate = $scope.markups.startRate;
          $scope.pharmSelected = true;
          expect($scope.markups.isPharm(startRate)).toBe(102.37421249999998);
       });
       it("isPharm will return 0 if pharmSelect is false", function(){
         var startRate = $scope.markups.startRate;
          $scope.pharmSelected = false;
          expect($scope.markups.isPharm(startRate)).toBe(0);
       });

       it("isElectronic will return 102 if electronicSelected is true", function(){
         var startRate = $scope.markups.startRate;
          $scope.electronicSelected = true;
          expect($scope.markups.isElectronic(startRate)).toBe(27.299789999999998);
       });
       it("isElectronic will return 0 if electronicSelected is false", function(){
         var startRate = $scope.markups.startRate;
          $scope.electronicSelected = false;
          expect($scope.markups.isElectronic(startRate)).toBe(0);
       });
       it("IF ELECTRONICSELECTED IS TRUE *** isElectronic startRate will call service markupAmounts.electronicCost", function(){

         var startRate = $scope.markups.startRate;
          $scope.electronicSelected = true;
          spyOn(markupAmounts, 'electronicCost');
          $scope.markups.isElectronic(startRate);
          expect(markupAmounts.electronicCost).toHaveBeenCalledWith(startRate);

       });

    });

    describe(' testing for service ...', function() {
      describe('markupAmounts service mock', function() {
        var createService;
      // beforeEach(module('myApp.view1'));
        beforeEach(inject(function() {
          var $injector = angular.injector(['myApp.view1'])

          createService = function() {
            return $injector.get('markupAmounts');
          }
        }));

        it('service should be defined', function(){
          var service = createService();
          expect(service).toBeDefined();
        });


        it('service should be an object', function(){
          var service = createService();
        expect(service).toEqual(jasmine.any(Object));
        });

        it('flatrate (job markup rate) should be 64.9995', function() {
          var service = createService();
          var startRate = 1299.99;
          expect(service.flatRate(startRate)).toBe(64.9995);
        });
        it('people markup should equal 49.139622', function() {
          var service = createService();
          var startRate = 1299.99;
          var noOfPeople = 3;
          expect(service.noOfPeople(noOfPeople,startRate)).toBe(49.139622);
        });
        it('food markup should equal 177.448635', function() {
          var service = createService();
          var startRate = 1299.99;
          expect(service.foodCost(startRate)).toBe(177.448635);
        });

        it('electronics markup should equal 177.448635', function() {
          var service = createService();
          var startRate = 1299.99;
          expect(service.electronicCost(startRate)).toBe(27.299789999999998);
        });

        it('electronics markup should equal 177.448635', function() {
          var service = createService();
          var startRate = 1299.99;
          expect(service.pharmCost(startRate)).toBe(102.37421249999998);
        });
      });
    });

});
