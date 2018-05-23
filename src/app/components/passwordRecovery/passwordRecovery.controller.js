

  
    

    PasswordRecoveryController.$inject = ['auth', 'alert', '$mdDialog'];
    export default function $1Controller(auth, alert, $mdDialog) {
      var vm = this;

      vm.waitingFromServer = false;
      vm.errors = undefined;
      vm.recoverPassword = recoverPassword;

      ///////////////

      function recoverPassword() {
        vm.waitingFromServer = true;
        vm.errors = undefined;
        
        var data = {
          username: vm.username
        };

        auth.recoverPassword(data)
          .then(function() {
            alert.success('You were sent an email to recover your password');
            $mdDialog.hide();
          })
          .catch(function(err) {          
            vm.errors = err.data.errors;
            if(vm.errors) {
              alert.error('That email/username doesn\'t exist');              
            } 
          })
          .finally(function() {
            vm.waitingFromServer = false;
          }); 
      }
    } 

