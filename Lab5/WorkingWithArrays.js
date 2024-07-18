const todos = [  { id: 1, title: "Task 1", completed: false },  { id: 2, title: "Task 2", completed: true },
                 { id: 3, title: "Task 3", completed: false },  { id: 4, title: "Task 4", completed: true },  ];

export default function WorkingWithArrays(app) {

  // 3.4.1 general retrieving arrays
  app.get("/lab5/todos", (req, res) => {
    res.json(todos);
  });


  // by primary key
  app.get("/lab5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    res.json(todo);
  });


  // get completed to-dos
  app.get("/lab5/todos", (req, res) => {
    const { completed } = req.query;
    if (completed !== undefined) {
      const completedBool = completed === "true";
      const completedTodos = todos.filter(
        (t) => t.completed === completedBool);
      res.json(completedTodos);
      return;
    }
    res.json(todos);
  });

  // create new to-do
  app.get("/lab5/todos/create", (req, res) => {
    const newTodo = {
      id: new Date().getTime(),
      title: "New Task",
      completed: false,
    };
    todos.push(newTodo);
    res.json(todos);
  })

  // delete
  app.get("/lab5/todos/:id/delete", (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
    todos.splice(todoIndex, 1);
    res.json(todos);
  });

  // update
  app.get("/lab5/todos/:id/title/:title", (req, res) => {
    const { id, title } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    todo.title = title;
    res.json(todos);
  });


};

