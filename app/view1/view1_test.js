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


 describe("MarkupCtrl controller to be definedddd", function() {


     it("MarkupCtrl controller should be defined", function () {
         expect(MarkupCtrl).toBeDefined();
     });
     it("$scope.markups should be defined ", function () {
         expect($scope.markups).toBeDefined();
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

      

      });
    });

});
