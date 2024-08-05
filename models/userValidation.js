const Joi = require("joi");

const userValidationSchema = Joi.object({
  name: Joi.string().required().min(3).max(30).alphanum(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "@", "org"] },
    }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

module.exports = userValidationSchema;
