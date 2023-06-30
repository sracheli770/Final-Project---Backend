import { Schema } from "mongoose";
const niggunSchema = new Schema({
    name: String,
    easyMovie: String,
    advancedMovie: String,
    notes: (Array),
    description: String,
    rebbe: String,
    isFavorite: {
        type: Boolean,
        default: false,
    }
});
export { niggunSchema };
