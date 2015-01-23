define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'LoginForm',
      initialize: function() {
        this.username = fw.observable();
        this.loginUser = function() {
          console.info('Login form submitted!');
        };
      }
    });
  }
);