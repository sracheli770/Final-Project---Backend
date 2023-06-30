import { model } from "mongoose";
import { niggunSchema } from "../schemas/niggunSchema.js";
const Niggun = model('Nigguns', niggunSchema);
export { Niggun };
