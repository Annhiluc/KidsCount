'use strict';

angular.module('kidsCountApp.auth', [
  'kidsCountApp.constants',
  'kidsCountApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
