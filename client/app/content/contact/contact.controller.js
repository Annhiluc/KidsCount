'use strict';

angular.module('kidsCountApp')
  .controller('ContactCtrl', ['$scope', function($scope){
    $scope.staffMembers = [{
    	name: "Bill Hutchinson",
    	position: "Executive Director, Tutoring - Faith UMC",
    	phone: "Cell: 352-281-2144",
    	email: "bill.kidscount@gmail.com "
    },
    {
    	name: "Keri O'Neil",
    	position: "Director, Faith UMC Program",
    	phone: "Cell: 772-341-5966",
    	email: "keri.kidscount@gmail.com"
    },
    {
    	name: "Kristan Kolb Ellison",
    	position: "Director, Rotary Mentor Center Program",
    	phone: "Cell: 352-672-3310",
    	email: "kristan.kidscount@gmail.com"
    }];

    $scope.request = {};

    
  }]);
