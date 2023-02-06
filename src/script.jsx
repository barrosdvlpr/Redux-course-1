const toggleTodo = (todo) => {
    return {
      ...todo,
      completed: !todo.completed
    };
  };
  
  const testToggleTodo = () => {
    const todoBefore = {
      id: 0,
      text: 'Learn Redux',
      completed: false
    };
    const todoAfter = {
      id: 0,
      text: 'Learn Redux',
      completed: true
    };
    
    deepFreeze(todoBefore);
    
    expect(
      toggleTodo(todoBefore)
    ).toEqual(todoAfter);
  };
  
  testToggleTodo();
  console.log('All tests passed.') || displayInPreview('All tests passed.');
  

  function displayInPreview(string) {
    var newDiv = document.createElement("div"); 
    var newContent = document.createTextNode(string); 
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv)
  }
  
  function deepFreeze (o) {
    if (o===Object(o)) {
      Object.isFrozen(o) || Object.freeze(o)
      Object.getOwnPropertyNames(o).forEach(function (prop) {
        prop==='constructor'||deepFreeze(o[prop])
      })
    }
    return o
  }