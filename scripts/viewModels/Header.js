define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'Header',
      initialize: function() {
        // loggedInUser will receive its value from the MainRouter
        this.loggedInUser = fw.observable().receiveFrom('MainRouter', 'loggedInUser');
      }
    });
  }
);