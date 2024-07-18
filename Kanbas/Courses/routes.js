import Database from "../Database/index.js";

export default function CourseRoutes(app) {
  // create new course
  app.post("/api/courses", (req, res) => {
    const course = { ...req.body,
      _id: new Date().getTime().toString() };
    Database.courses.push(course);
    res.send(course);
  });

  // retrieving a course
  app.get("/api/courses", (req, res) => { // makes the courses available at http://localhost:4000/api/courses
    const courses = Database.courses;
    res.send(courses);
  });

  // delete a course
  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses.filter((c) => c._id !== id);
    res.sendStatus(204);
  });

  // update a course
  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204); // Successful status 204
  });




}

