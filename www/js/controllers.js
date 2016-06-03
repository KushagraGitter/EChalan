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
   
.controller('cloudTabDefaultPageCtrl', function($scope) {

})

.controller('loginCtrl',function($scope, $state){
    $scope.login = function(){
         $state.go("tabsController.cameraTabDefaultPage");
    }
})
    