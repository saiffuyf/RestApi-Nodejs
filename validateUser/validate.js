const Joi = require("joi");

const validateUser = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(1).required(),
  });

  return schema.validate(data);
};

module.exports = { validateUser };