import { model } from "mongoose";
import { isFaveSchema } from "../schemas/isFaveSchema.js";
const IsFave = model("IsFavorite", isFaveSchema);
export { IsFave };
