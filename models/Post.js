import mongoose from 'mongoose'

const postModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Post = mongoose.model('post', postModel)
export default Post
