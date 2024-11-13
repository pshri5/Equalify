const {z} = require("zod");

exports.createGroup = z.object({
    name : string().min(1,"")
})