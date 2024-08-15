import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("attemps", schema);

export default model;