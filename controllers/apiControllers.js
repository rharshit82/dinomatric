const Post = require('../models/Post')
exports.addPost = async (req,res) =>{
    
  const { title, content } = req.body
  Post.create(
    {
      title,
      content,
    },
    (err, post) => {
      if (err) {
        return res.status(400).json({ message: 'Invalid post data' })
      }
      return res.status(201).json({ message: 'Post Added Successfuly' })
    }
  )
}
exports.fetchPosts = async (req,res) =>{
    
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 })
    // console.log(posts)
    return res.status(201).send(posts)
  } catch (err) {
    return res.status(404).json({ message: 'No Post Found' })
  }
}
exports.fetchPost = async (req,res) =>{
    const { id } = req.body
    try {
      const post = await Post.findById(id)
      if (post) {
        return res.status(201).send(post)
      } else {
        return res.status(404).json({ message: 'Post not Found' })
      }
    } catch (err) {
      return res.status(500).json({ message: 'Some Error Occured' })
    }
}
const facts = ["Dinosaurs were around in the Mesozoic Era or The Age of Dinosaurs",
                    "There were more than 700 species of Dinosaurs",
                    "The word dinosaur came from an English palaeontologist Richard",
                    "Tyrannosaurus Rex was the most ferocious dinosaur",
                    "Lizards, turtles, snakes and crocodiles all descend from dinosaurs",
                    "An astroid hit and Dinosaurs became extinct."
                  ]
const number = Math.floor((Math.random() * 6));
exports.getFact = (req,res) =>{
    res.send({fact: facts[number]})
}
exports.sendMessage = (req,res) =>{
  const accountSid = "ACe1f018d072076965270a159889ddf800";
const authToken = "f11894d4fc3d6931e5455281f577850b";
const client = require('twilio')(accountSid, authToken);
  const {phone}= req.body;
  console.log(phone)
client.messages
  .create({
     body: facts[number],
     from: '+15187206078',
     to: phone
   })
  .then(message => res.send("Message sent"));
}