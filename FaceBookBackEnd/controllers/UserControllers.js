const user = require ("./../Models/UserModel")
const UserControllers = {
    getUser : async (req,res)=>{
    try{    const user_id = req.params.id
        const User = await user.findById(user_id)
        if (User) {
            return res.status(200).json({user:User })
        } else {
            return res.status(400).json({message:"user dosent exist"})
        }
    }catch (error){return res.status(400).json({message:error.message})}}
}
module.exports = UserControllers