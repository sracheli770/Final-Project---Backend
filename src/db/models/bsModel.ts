import { model } from "mongoose";
import { bsSchema} from "../schemas/bsSchema.js";

const Card = model('Cards',bsSchema)

export {Card}