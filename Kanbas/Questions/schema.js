import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quizzes' },
    title: String,
    points: { type: Number, default: 10 },
    questionType: { type: String },
    question: String,
    choices: [String],
    correctChoice: { type: Number, default: 0 }, // For multiple choice questions
    blanks: [String] // For fill in the blanks questions
}, { collection: 'questions' });
export default questionSchema;