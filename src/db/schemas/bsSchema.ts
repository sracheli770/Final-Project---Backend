import { Schema } from "mongoose";

const bsSchema = new Schema({
    name: String,
    description: String,
    address: String,
    phone: String,
    image: String,
    bsId: String
})

export {bsSchema}