import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    number: { type: String, required: true },
    name: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    department: { type: String, required: true },
    credits: { type: Number, required: true },
    description: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    creatorId: { type: mongoose.Schema.Types.ObjectId, required: true }
}, { collection: 'courses' });

export default courseSchema;