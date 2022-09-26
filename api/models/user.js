const Joi=require('joi');

// Login valid
const login= Joi.object({
    email: Joi
        .string()
        .email()
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
    tag: Joi
        .string()
        .min(4)
        .max(4),
    password: Joi
        .string()
        .min(6)
        .max(64)
        .required(),
    email: Joi
        .string()
        .email()
        .min(3)
        .max(64),
    aboutme: Joi
        .string()
        .max(1024)
        .default(''),
    status: Joi
        .string()
        .max(64)
        .default('offline'),
    //profilePicture
    date: Joi
        .date()
        .default(Date)
});

module.exports={
    login,
    register
};