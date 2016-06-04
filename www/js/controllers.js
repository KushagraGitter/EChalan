angular.module('app.controllers', [])
  
.controller('cameraTabDefaultPageCtrl', function($scope) {
    var dashObject = $scope; 
   
    $scope.stepSelected = 1;
    $scope.StepSelection = function(stepSelection){
        $scope.stepSelected  = stepSelection;
    }
})
   
.controller('cartTabDefaultPageCtrl', function($scope) {
    $scope.lists = [];
    
    for(i=0;i<=20;i++){
        var chalan = {};
        chalan.regid = i+1;
      
        $scope.lists.push(chalan);
    }
})

.controller('allChalanCtrl',function($scope) {
    
})
   
.controller('cloudTabDefaultPageCtrl', function($scope, $ionicModal) {
    var dashObject = $scope; 
   
    $scope.stepSelected =  1;
   
        $ionicModal.fromTemplateUrl('templates/modal.html',{
            scope : $scope,
            animation : 'slide-in-up'
         }).then(function(modal){
             $scope.modal = modal;
         })
         
         $scope.StepSelection = function(stepSelection){
            $scope.stepSelected  = stepSelection;
         }
         
         $scope.CreateNewChalan=function(params) {
             $scope.modal.show();
         }
         
         $scope.SaveNewChalan = function(params) {
             $scope.modal.hide();
         }
})

.controller('loginCtrl',function($scope, $state, Auth, $firebaseAuth, $ionicLoading, $rootScope){
    $scope.user = {};
    $scope.user.email = "";
    $scope.user.password = "";
    
    
    var ref = new Firebase($scope.firebaseUrl);
    var auth = $firebaseAuth(ref);
    
    $scope.login = function(){
        $state.go("tabsController.cloudTabDefaultPage");
        if($scope.user && $scope.user.email, $scope.user.password){
            $ionicLOading.show({
               template: 'Signing In...' 
            });
            auth.$authWithPassword({
                email : $scope.user.email,
                password : $scope.user.password
            }).then(function(authData){
                console.log('loggedin as: '+ authData.uid);
                ref.child('users').child(authData.uid).once('value',function(snapshot){
                    var val = snapshot.val();
                    $scope.$apply(function(){
                       $rootScope.displayName = val; 
                    });
                });
                $ionicLoading.hide();
                $state.go("tabsController.cloudTabDefaultPage");
            }).catch(function(error){
                alert("Authentication failed:" + error.message);
                $ionicLoading.hide();
            })
        }
        else{
             alert("Please enter email and password both");
        }
     //   Auth.login($scope.user.email, $scope.user.password );
      //   $state.go("tabsController.cloudTabDefaultPage");
    }
})
