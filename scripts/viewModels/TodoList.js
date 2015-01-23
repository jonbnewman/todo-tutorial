define(['footwork', '/scripts/viewModels/TodoItem.js'],
  function(fw, TodoItem) {
    return fw.viewModel({
      namespace: 'TodoList',
      initialize: function() {
        var self = this; // create a reference to this viewModel we can use inside of the callback

        // stores the list of TodoItem entries
        this.todos = fw.observableArray();

        // listen for any 'newItem' messages broadcast on our namespace.
        this.$namespace.subscribe('newItem', function(thingToDo) {
          // new thingToDo was received, lets create a new TodoItem based on it
          self.todos.push( new TodoItem(thingToDo) );
        });
      }
    });
  }
);