import model from "./model.js";

export default function CourseRoutes(app) {
  // create new course
    app.post("/api/courses", async (req, res) => {
        model.create(req.body)
            .then(course => res.status(201).send(course))
            .catch(error => {
                console.log(error);
                res.status(400).send(error)
            });
    });

    // retrieving a course
    app.get("/api/courses", async (req, res) => { // makes the courses available at http://localhost:4000/api/courses
        model.find()
            .then(courses => res.status(200).send(courses))
            .catch(error => res.status(400).send(error));
    });

    // delete a course
    app.delete("/api/courses/:id", async (req, res) => {
        model.findByIdAndDelete(req.params.id)
            .then(course => res.status(200).send(course))
            .catch(error => res.status(400).send(error));
    });

    // update a course
    app.put("/api/courses/:id", async (req, res) => {
        model.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(course => res.status(200).send(course))
            .catch(error => res.status(400).send(error));
    });

    app.get('/api/courses/creator/:creatorId', async (req, res) => {
        model.find({creatorId: req.params.creatorId})
            .then(courses => res.status(200).send(courses))
            .catch(error => res.status(400).send(error));
    });

    app.get('/api/courses/student/:studentId', async (req, res) => {
        model.find({students: req.params.studentId})
            .then(courses => res.status(200).send(courses))
            .catch(error => {
                console.log(error);
                res.status(400).send(error);
            });
    });

    app.post('/api/courses/:courseId/students/:studentId', async (req, res) => {
        const { courseId, studentId } = req.params;
        try {
            const course = await model.findById(courseId);
            if (!course) {
                return res.status(404).send('Course not found');
            }
            // check student exists
            if (course.students.includes(studentId)) {
                return res.status(400).send('Student already enrolled in this course');
            }
            // add sid to the course
            course.students.push(studentId);
            await model.findByIdAndUpdate(courseId, course, { new: true });
            res.send(course);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    app.delete('/api/courses/:courseId/students/:studentId', async (req, res) => {
        const { courseId, studentId } = req.params;
        try {
            const course = await model.findById(courseId);
            if (!course) {
                return res.status(404).send('Course not found');
            }
            // check student exists
            if (!course.students.includes(studentId)) {
                return res.status(400).send('Student is not enrolled in this course');
            }
            // delete sid to the course
            course.students = course.students.filter(id => id.toString() !== studentId);
            await model.findByIdAndUpdate(courseId, course, { new: true });
            res.send(course);
        } catch (error) {
            res.status(400).send(error);
        }
    });




}

