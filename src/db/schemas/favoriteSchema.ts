import mongoose, { Schema } from "mongoose";

const FavoriteSchema = new Schema({
    nigguns: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nigguns'
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

export { FavoriteSchema }