define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'TodoItem',
      initialize: function(thingToDo) {
        // store the string text entered by user as thingToDo
        this.thingToDo = fw.observable(thingToDo);
      }
    });
  }
);