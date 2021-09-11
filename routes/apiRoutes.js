const express =require('express') 
const router = express.Router()
const {addPost,fetchPosts,fetchPost} = require('../controllers/apiControllers.js')


router.post('/add_post', addPost)
router.get('/fetch_posts', fetchPosts)
router.post('/fetch_post', fetchPost)
router.get('/hello',(req,res)=> res.send("hi"))

module.exports = router