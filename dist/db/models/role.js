import { model } from "mongoose";
import { roleSchema } from "../schemas/roleShema.js";
const Role = model("Role", roleSchema);
export { Role };
