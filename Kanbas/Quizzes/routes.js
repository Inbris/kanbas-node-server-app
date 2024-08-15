import model from "./model.js";

export default function QuizzesRoutes(app) {
    app.post('/api/quizzes', async (req, res) => {
        model.create(req.body)
            .then(quiz => res.status(201).send(quiz))
            .catch(error => {
                console.log(error);
                res.status(400).send(error);
            });
    });

    app.get('/api/quizzes', async (req, res) => {
        model.find()
            .then(quizzes => res.status(200).send(quizzes))
            .catch(error => res.status(400).send(error));
    });

    app.delete('/api/quizzes/:id', async (req, res) => {
        model.findByIdAndDelete(req.params.id)
            .then(quiz => res.status(200).send(quiz))
            .catch(error => res.status(400).send(error));
    });

    app.put('/api/quizzes/:id', async (req, res) => {
        model.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(quiz => res.status(200).send(quiz))
            .catch(error => res.status(400).send(error));
    });

    app.get('/api/quizzes/course/:courseId', async (req, res) => {
        model.find({ courseId: req.params.courseId })
            .then(quizzes => res.status(200).send(quizzes))
            .catch(error => res.status(400).send(error));
    });

    app.get('/api/quizzes/:id', async (req, res) => {
        model.findById(req.params.id)
            .then(quiz => res.status(200).send(quiz))
            .catch(error => res.status(400).send(error));
    });

}