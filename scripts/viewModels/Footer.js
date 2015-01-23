define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'Footer',
      initialize: function() {
        // numRemainingTodo will receive its value from the TodoList
        this.numRemainingTodos = fw.observable().receiveFrom('TodoList', 'numRemainingTodos');
      }
    });
  }
);