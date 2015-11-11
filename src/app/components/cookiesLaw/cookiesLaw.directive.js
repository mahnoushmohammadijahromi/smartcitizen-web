(function(){
'use strict';

angular.module('app.components')
  .directive('cookiesLaw', cookiesLaw);


cookiesLaw.$inject = ['$cookies'];

function cookiesLaw($cookies) {
  return {
    template:
      '<div class="cookies-policy_container" ng-hide="consent()">' +
      'This site uses cookies to offer you a better experience.  ' +
      ' <a href="" ng-click="consent(true)">Accept</a> or' +
      ' <a ui-sref="layout.policy">Learn More.</a> ' +
      '</div>',
    controller: function($scope) {
      var _consent = $cookies.consent;
      $scope.consent = function(consent) {
        if (consent === undefined) {
          return _consent;
        } else if (consent) {
          $cookies.consent = true;
          _consent = true;
        }
      };
    }
  };
}


})();
