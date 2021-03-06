angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

 //     .state('tabsController.cameraTabDefaultPage', {
  //  url: '/page2',
  //  views: {
 //     'tab1': {
 //       templateUrl: 'templates/cameraTabDefaultPage.html',
//        controller: 'cameraTabDefaultPageCtrl'
 //     }
 //   }
//  })

  .state('tabsController.cartTabDefaultPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/cartTabDefaultPage.html',
        controller: 'cartTabDefaultPageCtrl'
      }
    }
  })
  
  .state('tabsController.allChalan', {
    url: '/page2',
    views: {
      'tab4': {
        templateUrl: 'templates/allChalan.html',
        controller: 'allChalanCtrl'
      }
    }
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

   .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl',
    
    resolve: {
            // controller will not be loaded until $waitForAuth resolves
            // Auth refers to our $firebaseAuth wrapper in the example above
            "currentAuth": ["Auth",
                function (Auth) {
                    // $waitForAuth returns a promise so the resolve waits for it to complete
                    return Auth.$waitForAuth();
        }]
        }
  })

$urlRouterProvider.otherwise('/page5')

  

});