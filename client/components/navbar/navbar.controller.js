'use strict';

angular.module('kidsCountApp')
  .controller('NavbarController', ['$scope', function($scope){
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    },
    {
      'title': 'About Us',
      'state': 'about'
    },
    {
      'title': 'Volunteer',
      'state': 'volunteer'
    },
    {
      'title': 'Ways to Give',
      'state': 'give'
    },
    {
      'title': 'Contact',
      'state': 'contact'
    },
    {
      'title': 'Resources',
      'state': 'resources'
    },
    {
      'title': 'Gallery',
      'state': 'gallery'
    },
    {
      'title': 'Blog',
      'state': 'blog'
    }];

    $scope.isCollapsed = true;

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
}]);
