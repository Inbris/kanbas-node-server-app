import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("Course", schema);

export default model;