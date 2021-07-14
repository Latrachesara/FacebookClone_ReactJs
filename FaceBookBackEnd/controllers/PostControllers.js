const post = require("./../Models/PostModel");
const PostControllers ={
    CreationPost: async (req, res) => {
        const {
            description,
        } = req.body;
        try{
            if(!description){
                return  res.status(400).json({error:"Plase add content to ur post"})
              }
            const newPost = await new post({
                description,
                postedBy : req.user,
              });
              newPost
                .save().then(result=>{
                    res.json({post:result})
                })
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error.message });
          }
    },
    allPost : async (req, res) =>{
        const Posts = await post.find();
        res.json(Posts);

    }
};
module.exports = PostControllers;
