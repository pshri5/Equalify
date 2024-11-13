

exports.createGroup = async (req,res)=>{
    const {name} = req.body;


    res.status(200).json({
        message : "Group controller"
    })
}