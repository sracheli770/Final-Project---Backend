import { Schema } from "mongoose";
const isFaveSchema = new Schema({
    name: String,
    easyMovie: String,
    advancedMovie: String,
    notes: (Array),
    description: String,
    rebbe: String,
    isFavorite: Boolean
});
export { isFaveSchema };
