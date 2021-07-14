const post = require("./../Models/PostModel");
const PostControllers = {
  CreationPost: async (req, res) => {
    const { content } = req.body;
    try {
      if (!content) {
        return res.status(400).json({ error: "Plase add content to ur post" });
      }

      const newPost = await new post({
        content,
        postedBy: req.user,
        photo: req.file.filename,
      });
      newPost.save().then((result) => {
        res.status(201).json({ result });
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  },
  allPost: async (req, res) => {
    const Posts = await post.find();
    res.json(Posts);
  },
};
module.exports = PostControllers;
