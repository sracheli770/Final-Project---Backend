import joi from "joi";

const niggunValidate = joi.object({
    name: joi.string().min(2).max(30).required(),
    easyMovie: joi.string().min(2).max(30).required(),
    advancedMovie: joi.string().min(2).max(30).required(),
    notes: joi.array().items(joi.string().min(2).max(30)),
    description: joi.string().min(2).max(2).required(),
    rebbe: joi.string().min(2).max(2).required(),
    isFavorite: joi.boolean()
})

export { niggunValidate }