const Joi = require("joi");

const TaskSchema = Joi.object({
    date: Joi.string().required().min(4).max(20),
    subject: Joi.string().required().min(4).max(20),
    task: Joi.date().required().min(4).max(20),
});
    
module.exports = TaskSchema;