export const validator = (validationSchema) => {
    return function (req,res,next){
        const result = validationSchema.safeParse(req.body);
        if(!result.success){
            return res.status(400).json({errors: result.error.errors});
        }
        next();
    };
}