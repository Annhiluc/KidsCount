'use strict';

angular.module('kidsCountApp')
  .controller('AboutCtrl', ['$scope', function($scope){
    $scope.boardMembers = [{
    	name: "Dorene Ross",
    	position: "Ph.D., President",
    	description: "Professor, University of Florida, College of Education",
    	phone: "Cell: 352-538-1920",
    	email: "dross@coe.ufl.edu"
    },
    {
    	name: "Kathy Vance",
    	position: "Vice President",
    	description: "Retired elementary school teacher",
    	phone: "Cell: 352-514-7981",
    	email: "vancealto@windstream.net"
    },
    {
    	name: "Dean Poole",
    	position: "Treasurer",
    	description: "Dean Poole CPA, PA",
    	phone: "Office: 352-377-7905",
    	email: "dean@deanofaccounting.com"
    },
    {
    	name: "Kathy Dixon",
    	position: "Secretary",
    	description: "Former elementary teacher and principal, current Principal-in-Residence @ UF Lastinger Center for Learning",
    	phone: "Cell: 352-514-4640",
    	email: "dixonkv@coe.ufl.edu"
    },
    {
    	name: "Ward Simonton",
    	position: "Ph.D.",
    	description: "Instructor, SFC Engineering Technology Program",
    	phone: "Cell: 352-222-1534",
    	email: "ward_simonton@bellsouth.net"
    },
    {
    	name: "Dick Hughes",
    	position: "Ed.S.",
    	description: "Retired UF Media Specialist",
    	phone: "Home: 352-373-4037; Cell: 352-213-4706",
    	email: "hughesrhh@gmail.com"
    },
    {
    	name: "Tricia Garzon",
    	position: "",
    	description: "President, The JAG Agency, a local marketing and advertising firm",
    	phone: "Cell: 352-240-3542",
    	email: "tricia@jagagency.com"
    },
    {
    	name: "Brian Myers",
    	position: "",
    	description: "Associate Professor, UF Agricultural Education & Communication",
    	phone: "Cell: 352-256-2457",
    	email: "bmyers16@windstream.net"
    }];

    $scope.staffMembers = [{
    	name: "Bill Hutchinson",
    	position: "Administrative and Outreach Director at Faith UMC- Rawlings Elementary",
    	phone: "Cell: 352-281-2144",
    	email: "bill.kidscount@gmail.com "
    },
    {
    	name: "Keri O'Neil",
    	position: "Program Director at Faith UMC- Rawlings Elementary",
    	phone: "Cell: 772-341-5966",
    	email: "keri.kidscount@gmail.com"
    },
    {
    	name: "Kristan Kolb Ellison",
    	position: "Program Director Rotary Mentor Center Program",
    	phone: "Cell: 352-672-3310",
    	email: "kristan.kidscount@gmail.com"
    }];

    
  }]);
