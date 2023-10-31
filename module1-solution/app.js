(function() {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.checkLunch = function() {
        var lunchMenu = $scope.lunchMenu;
        
        if (!lunchMenu) {
          $scope.message = 'Please enter data first';
          $scope.messageColor = 'red';
          $scope.borderColor = 'red';
        } else {
          var dishes = lunchMenu.split(',').filter(item => item.trim() !== '');
          $scope.borderColor = 'green';
  
          if (dishes.length <= 3) {
            $scope.message = 'Enjoy!';
            $scope.messageColor = 'green';
          } else {
            $scope.message = 'Too much!';
            $scope.messageColor = 'green';
          }
        }
      };
    }
  })();