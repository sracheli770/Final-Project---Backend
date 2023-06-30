import { model } from "mongoose";
import { FavoriteSchema } from "../schemas/favoriteSchema.js";
const Favorite = model("Favorites", FavoriteSchema);
export { Favorite };
