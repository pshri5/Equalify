const Group = require("../models/group.model");
const Expense = require("../models/expense.model");

// Create Group
exports.createGroup = async (req,res)=>{
    const {name} = req.body;
    const members = [req.id];
    try{
        // Create Group
        const group = await Group.create({
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
            path : 'members',
            select : "-password -createdAt -updatedAt -__v" // Given fields will not populate "-" indicates negation
        }) // Populate the data of the object
        .select('-createdAt -updatedAt -__v'); // Given fields will not populate "-" indicates negation

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
            select : "-password -createdAt -updatedAt -__v" // Given fields will not populate "-" indicates negation
        }) // Populate the data of the object
        .select('-createdAt -updatedAt -__v'); // Given fields will not populate "-" indicates negation
    
        return res.status(200).json(group)
    } catch(error){
        console.log(error);
        return res.json({error : "Group not found!"})
    }
}

// Update name of group
exports.updateGroup = async (req,res) => {
    const {groupId} = req.params;
    const {name} = req.body;

    try{
        const group = await Group.findByIdAndUpdate(
            groupId,
            {"$set":{
                name
            }},
            {new : true} // Will return updated document in response
        ).populate({
            path : 'members',
            select : "-password -createdAt -updatedAt -__v" // Given fields will not populate "-" indicates negation
        }) // Populate the data of the object
        .select('-createdAt -updatedAt -__v'); // Given fields will not populate "-" indicates negation

        res.status(200).json({
            message : "Group updated!",
            group
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

// Add members
exports.addMember = async (req,res) => {
    const {groupId} = req.params;
    const {memberId} = req.body;
    try{
        const group = await Group.findByIdAndUpdate(
            groupId,
            {$addToSet: {members:memberId}},// Add only if user is not already present
            {new : true} // Will return updated document in response
        ).populate({
            path : 'members',
            select : "-password -createdAt -updatedAt -__v" // Given fields will not populate "-" indicates negation
        }) // Populate the data of the object
        .select('-createdAt -updatedAt -__v'); // Given fields will not populate "-" indicates negation

        res.status(200).json(group);
    }catch(error){
        console.log(error);
        return res.status(400).json({
            error : "Error adding member"
        })
    }
}

// Remove member from the group
exports.deleteMember = async (req,res) => {
    const {groupId} = req.params;
    const {memberId} = req.body;

    try{
        const group = await  Group.findByIdAndUpdate(
            groupId,
            {$pull: {members : memberId}}, // Remove the provided memberId from members
            {new : true} // Return latest data
        ).populate({
            path : 'members',
            select : "-password -createdAt -updatedAt -__v" // Given fields will not populate "-" indicates negation
        }) // Populate the data of the object
        .select('-createdAt -updatedAt -__v'); // Given fields will not populate "-" indicates negation

        return res.status(200).json(group);
    } catch(error){
        console.log(error);
        return res.json({error : "Error removing the member"});
    }
}

// Get group Expenses
exports.getExpenses = async(req,res) => {
    const {groupId} = req.params;
    try{
        const expenses = await Expense.find({
            $and : [
                {groupId : groupId},
                {isSettled : false}
            ]
        });
        return res.status(200).json({expenses});
    } catch(error) {
        console.error(error.message);
        return res.json({error : "Error fetching expenses"});
    }
}

// Settle all the expenses of the group
exports.settleExpenses = async (req,res) => {
    const {groupId} = req.params;
    const {settle} = req.body;
    if(!settle){
        return res.status(403).json({
            error : "Expense cannot be unsettled!"
        })
    }
    try{
        await Expense.updateMany({
             $and : [
                {groupId : groupId},
                {isSettled : false}
            ]
            },
            {isSettled : true},
            {new : true}
        )
        return res.status(200).json({
            message : "Expenses settled!"
        });
    } catch(error){
        console.log(error.message);
        return res.status(400).json("Error settling expenses");
    }
}