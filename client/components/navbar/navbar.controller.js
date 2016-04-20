'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
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

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('kidsCountApp')
  .controller('NavbarController', NavbarController);
