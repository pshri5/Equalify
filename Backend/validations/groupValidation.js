const {z} = require("zod");

exports.createSchema = z.object({
    name : z.string()
})