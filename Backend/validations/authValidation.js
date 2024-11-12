const {z} = require("zod");

/*  
Password validation
Minimum 5 characters
At least one special character
At least one uppercase letter
At least one lowercase letter
At least one number
*/
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/;

exports.registerSchema = z.object({
    name: z.string().min(3,"Name should have atleast 3 characters"),
    email: z.string().email("Invalid email address"),
    password : z.string().regex(passwordRegex,"Password doesn't match the criteria")
})

exports.loginSchema = z.object({
    email: z.string().email("Invalid email address")
})