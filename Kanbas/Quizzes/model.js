import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("Quizzes", schema);

export default model;