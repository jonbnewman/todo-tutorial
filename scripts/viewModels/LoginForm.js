define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'LoginForm',
      initialize: function() {
        /**
         * Create a new namespace instance we will use to
         * communicate with the MainRouter.
         */
        this.mainRouterNamespace = fw.namespace('MainRouter');

        this.username = fw.observable();
        this.loginUser = function() {
          // Tell the MainRouter that a user has logged in (and provide the current username)
          this.mainRouterNamespace.trigger('userLogin', this.username());
        };
      }
    });
  }
);