import model from "./model.js";

export default function QuestionsRoutes(app) {
   app.get("/api/questions", async (req, res) => {
      const questions = await model.find();
      res.send(questions);
   });

   app.get("/api/questions/:id", async (req, res) => {
      const question = await model.findById(req.params.id);
      res.send(question);
   });

   app.post("/api/questions", async (req, res) => {
           model.create(req.body)
               .then(question => res.status(201).send(question))
               .catch(error => {
                   console.log(error);
                   res.status(400).send(error);
               });
       }
   )

   app.delete("/api/questions/:id", async (req, res) => {
      const question = await model.findByIdAndDelete(req.params.id);
      res.send(question);
   });

   app.put("/api/questions/:id", async (req, res) => {
      const question = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(question);
   });

   app.get("/api/questions/quiz/:quizId", async (req, res) => {
      const questions = await model.find({ quizId: req.params.quizId });
      res.send(questions);
   });
}