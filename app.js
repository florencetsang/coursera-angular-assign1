(function(){
  'use strict';

  angular.module('Assign1',[])
  .controller('AssignController',AssignController);
  AssignController.$inject=['$scope'];
  function AssignController ($scope){
    $scope.dishes = "";
    $scope.message = "";
    $scope.checkIfTooMuch = function(){
      var dishesString = $scope.dishes.replace(/\s/g, '');
      if(/^\s*$/.test(dishesString)){
        $scope.message="Please enter data first";
      }else{
        var numDishes = calNumDishes(dishesString);
        if(numDishes <= 3){
          $scope.message = "Enjoy!";
        }else{
          $scope.message = "Too much!";
        }
      }
    };

    function calNumDishes(string){
      var numDishes = 1;
      for(var i = 0 ; i < string.length ; i++){
        if(string.charAt(i) === ','){
          numDishes++;
        }
      }
      return numDishes;
    }
  }

})();
