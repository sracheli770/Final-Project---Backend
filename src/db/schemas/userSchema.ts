import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    userName: String,
    email: String,
    password: String,

    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }],

    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Favorites'
    }],
    
})

export {userSchema}