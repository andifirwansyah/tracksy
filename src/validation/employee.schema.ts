import Joi from "joi";

const employeeSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be valid",
  }),
  position: Joi.string().required().messages({
    "string.empty": "Position is required",
  }),
  hourly_rate: Joi.number().required().messages({
    "number.base": "Hourly rate must be a number",
    "any.required": "Hourly rate is required",
  }),
  availability: Joi.string().required().messages({
    "string.empty": "Availability is required",
  }),
});

export default employeeSchema;
