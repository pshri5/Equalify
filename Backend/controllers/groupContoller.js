const Group = require("../models/group.model");

// Create Group
exports.createGroup = async (req,res)=>{
    const {name} = req.body;
    const members = [req.id];
    try{
        // Create Group
        await Group.create({
            name,
            members
        });

        return res.status(200).json({
            message : "Group created sucessfully!"
        })
        
    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error creating group!"
        })
    }
}

// List all the groups user is part of
exports.listGroups = async (req,res) => {
    const id = req.id;
    try{
        const groups = await Group.find({
            members :  id
        }).populate({
            path : "members",
            select : "-password -updatedAt -createdAt -__v"
        })
        .select('-updatedAt -createdAt -__v');

        return res.status(200).json({
            groups
        })
    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error getting group!"
        })
    }
}

// Get details of one group
exports.getGroup = async (req,res) => {
    const {groupId} = req.params;
    try{
        const group = await Group.findById(groupId)
        .populate({
            path : 'members',
            select : "-password -createdAt -updatedAt -__v"
        })
        .select('-createdAt -updatedAt -__v');
    
        return res.status(200).json(group)
    } catch(error){
        console.log(error);
        return res.json({error : "Group not found!"})
    }
}

exports.updateGroup = async (req,res) => {
    const {groupId} = req.params;
    const {name} = req.body;

    try{
        const group = await Group.findByIdAndUpdate(
            groupId,
            {"$set":{
                name
            }}
        ).populate({
            path : 'members',
            select : "-password -createdAt -updatedAt -__v"
        })
        .select('-createdAt -updatedAt -__v');

        res.status(200).json({
            message : "Group updated!"
        })

    }catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error adding member"
        })
    }
}

// Delete group
exports.deleteGroup = async (req,res) => {
    const {groupId} = req.params;
    try{
        await Group.deleteOne({
            _id: groupId
        });
        return res.json({
            message : "Group deleted successfully!"
        })

    } catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Unable to delete group"
        })
    }
}

// Add members - Under Progress
exports.addMember = async (req,res) => {
    const {groupId} = req.params;
    const {userId} = req.body;
    try{
        const group = await Group.findByIdAndUpdate(
            groupId,
            {$addToSet: {members:userId}} // Add only if user is not already present
        ).populate({
            path : 'members',
            select : "-password -createdAt -updatedAt -__v"
        })
        .select('-createdAt -updatedAt -__v');
        ;
        res.status(200).json(group);
    }catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error adding member"
        })
    }
}