const Joi=require('joi');

// Login valid
const login= Joi.object({
    login: Joi
        .string()
        .required(),
    password: Joi
        .string()
        .required()
});

// Register valid
const register= Joi.object({
    nick: Joi
        .string()
        .min(3)
        .max(64)
        .required(),
    login: Joi
        .string()
        .min(3)
        .max(64)
        .required(),
    password: Joi
        .string()
        .min(6)
        .max(64)
        .required(),
    email: Joi
        .string()
        .email()
        .min(3)
        .max(64)
        .required(),
    eboutme: Joi
        .string()
        .max(1024),
    status: Joi
        .string()
        .max(64),
    //profilePicture
    //CoverPicture
    date: Joi
        .date()
        .default(Date)
});

module.exports={
    login,
    register
};