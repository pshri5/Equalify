const {z} = require("zod");

exports.createSchema = z.object({
    name : z.string().min(1,"Name of expense is required"),
    amount : z.number().min(0,"Amount cannot be negative"),
    payees : z.array(
        z.string()
        .min(24,"Payee Id is inavlid"))
        .min(1,"Atleast one payee should be defined"),
    sharedBy : z.array(
        z.string()
        .min(24,"Sharee Id is invalid"))
        .min(1,"Atleast one sharee is required"),
    groupId : z.string().min(24,"Group Id is invalid")
})

exports.updateSchema = z.object({
    name : z.string().min(1,"Name of expense is required").optional(),
    amount : z.number().min(0,"Amount cannot be negative").optional()
})