import joi from "joi";
import { phoneRegex, urlRegex } from "./utils.js";

const schema = joi.object({
    name: joi.string().min(2).max(30).required(),
    description: joi.string().min(2).max(300).required(),
    address: joi.string().min(2).max(30).required(),
    phone: joi.string().regex(phoneRegex),
    image: joi.string().regex(urlRegex),
    bsId: joi.string().min(2).max(30).required(),
})

export {schema as cardSchema}