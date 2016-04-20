'use strict';

angular.module('kidsCountApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/content/about/about.html',
        controller: 'AboutCtrl'
      })
      .state('volunteer', {
        url: '/volunteer',
        templateUrl: 'app/content/volunteer/volunteer.html',
        controller: 'VolunteerCtrl'
      })
      .state('give', {
        url: '/give',
        templateUrl: 'app/content/give/give.html',
        controller: 'GiveCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/content/contact/contact.html',
        controller: 'ContactCtrl'
      })
      .state('resources', {
        url: '/resources',
        templateUrl: 'app/content/resources/resources.html',
        controller: 'ResourcesCtrl'
      })
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'app/content/gallery/gallery.html',
        controller: 'GalleryCtrl'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'app/content/blog/blog.html',
        controller: 'BlogCtrl'
      });
  });
