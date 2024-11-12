const validator = (validationSchema) => {
    return function (req,res,next){
        const result = validationSchema.safeParse(req.body);
        if(!result.success){
            const errors = result.error.errors.map((error)=>error.message);
            return res.status(400).json({errors: errors});
        }
        next();
    };
}

module.exports = validator;