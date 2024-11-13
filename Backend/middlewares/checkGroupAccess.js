const Group = require("../models/group.model");

const checkGroupAccess = async (req,res,next) => {
    const id = req.id;
    const {groupId} = req.params;
    try{
        const group = await Group.findById(groupId);
        
        // Check if user is a memeber of the group
        const isMember = group.members.some(member => member._id.toString()=== id)

        if(!isMember){
            return res.status(403).json({
                error : "You are not member of this group!"
            });
        }
        next();
    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error accessing group"
        })
    }
}

module.exports = checkGroupAccess;