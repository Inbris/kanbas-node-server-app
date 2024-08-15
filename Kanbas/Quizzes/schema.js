import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Courses'},
    title: String,
    description: String,
    quizType: { type: String, default: 'Graded Quiz' },
    points: { type: Number, default: 100 },
    assignmentGroup: { type: String, default: 'Quizzes' },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 }, // in minutes
    multipleAttempts: { type: Boolean, default: false },
    howManyAttempts: { type: Number, default: 1 },
    showCorrectAnswers: { type: Boolean, default: false },
    accessCode: { type: String, default: '' },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    published: { type: Boolean, default: false },
    questionsNumber: { type: Number, default: 0 }
}, { collection: 'quizzes' });

export default quizSchema;
