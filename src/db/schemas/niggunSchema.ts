import { Schema } from "mongoose";

const niggunSchema = new Schema({
    name: String,
    easyMovie: String,
    advancedMovie: String,
    notes: Array<string>,
    description: String,
    rebbe: String,
    isFavorite: {
        type: Boolean,
        default: false,
    }
})

export { niggunSchema }