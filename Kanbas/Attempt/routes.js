import model from "./model.js";

export default function AttempRoutes(app) {
    app.post('/api/attempts', async (req, res) => {
        model.create(req.body)
            .then(attemp => res.status(201).send(attempt))
            .catch(error => {
                console.log(error);
                res.status(400).send(error)
            });
    });

    app.get('/api/attempts/:quizId', async (req, res) => {
        model.find({ quizId: req.params.quizId })
            .then(attempts => res.status(200).send(attempts))
            .catch(error => {
                console.log(error);
                res.status(400).send(error)
            });
    });

    app.get('/api/attempts/:quizId/:studentId', async (req, res) => {
        model.findOne({ quizId: req.params.quizId, studentId: req.params.studentId })
            .then(attempt => res.status(200).send(attempt))
            .catch(error => {
                console.log(error);
                res.status(400).send(error)
            });
    });
}