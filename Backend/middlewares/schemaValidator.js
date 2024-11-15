const schemaValidator = (schema) => {
    return function (req,res,next){
        const result = schema.safeParse(req.body);
        if(!result.success){
            console.log(result.error);
            const errors = result.error.errors.map((error)=> {
                if(error.message == 'Required'){
                    return `${error.path} ${error.message.toLowerCase()} as ${error.expected}`;
                }
                return error.message;
            });
            return res.status(400).json({
                errors: errors
            });
        }
        next();
    };
}

module.exports = schemaValidator;