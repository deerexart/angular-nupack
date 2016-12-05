'use strict';

describe('MarkupCtrl', function(){


    var $rootScope, $scope, $controller;
    var markupAmounts;
    var MarkupCtrl;

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

        it("should be  defined", function () {
            expect(MarkupCtrl).toBeDefined();
        });

    });



});
