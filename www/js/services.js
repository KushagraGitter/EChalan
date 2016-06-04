angular.module('app.services', ['firebase'])

.factory('BlankFactory', [function(){

}])

.factory("Auth", ["$firebaseAuth", "$rootScope", 'firebase',
    function ($firebaseAuth, $rootScope) {
            var ref = new Firebase('https://project-2714189595931513793.firebaseio.com');
            return $firebaseAuth(ref);
}])

//.service('AuthService', [function($firebaseAuth, firebase){
//        var ref = new Firebase(firebase.url);
//        var authObj = $firebaseAuth(ref);
        
//        var login = function(email, password){
//            authObj.$authWithPassword({
//                email: email,
//                password: password
//            }).then(function(authData){
//                console.log("Logged in as:", authData.uid);
//            }).catch(function(error){
//                console.error("Authentication failed:", error);
//            })
//        }
//}]);

