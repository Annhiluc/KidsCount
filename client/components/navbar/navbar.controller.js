'use strict';

angular.module('kidsCountApp')
  .controller('NavbarController', ['$scope', '$timeout', '$location','Auth', function($scope, $timeout, $location, Auth){
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

    $timeout(function(){
      $(".dropdown-button").dropdown();
      $('.button-collapse').sideNav({
            closeOnClick: false,
            edge: 'right'
          }
      );
      $('.collapsible').collapsible();
    });

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    // See what route is active
    $scope.routeIs = function(item){
      if($location.path() == item){
        return true;
      }
      return false;
    }

    $scope.routeContains = function(item){
      if($location.path().indexOf(item) != -1){
        return true;
      }
      return false;
    }


    $scope.closeNav = function(){
      $('.button-collapse').sideNav('hide');
    }
}]);
