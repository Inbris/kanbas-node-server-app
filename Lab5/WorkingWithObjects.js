const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };

  const moduleObj = {
    id: "1",
    name: "NodeJS Module",
    description: "Learn about NodeJS in depth",
    course: "Backend Development"
};

  export default function WorkingWithObjects(app) {

    // assignment
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });

    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
    });

    // edit assignment score, completed
app.post('/lab5/assignment/score', (req, res) => {
  const { newScore } = req.body;
  assignment.score = newScore;
  res.json(assignment);
});

app.post('/lab5/assignment/completed', (req, res) => {
  const { newCompleted } = req.body;
  assignment.completed = newCompleted;
  res.json(assignment);
});



    // route to get module obj
    app.get('/lab5/module', (req, res) => {
      res.json(moduleObj);
  }); // entire module
    
    app.get('/lab5/module/name', (req, res) => {
      res.send(moduleObj.name);
  }); // get name
    
  app.post('/lab5/module/name', (req, res) => {
    const { newName } = req.body;
    moduleObj.name = newName;
    res.json(moduleObj.name);
  }); // update name

    
  };
  
  