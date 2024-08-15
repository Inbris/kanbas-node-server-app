import mongoose from "mongoose";

const studentAttemptSchema = new mongoose.Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
    studentId: String,
    attemptDate: { type: Date, default: Date.now },
    score: Number,
    answers: [
        {
            questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
            selectedAnswer: String,
            correct: Boolean
        }
    ]
}, { collection: 'attempts' });

export default studentAttemptSchema;