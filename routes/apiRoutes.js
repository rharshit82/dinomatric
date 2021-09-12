const express =require('express') 
const router = express.Router()
const {addPost,fetchPosts,fetchPost,sendMessage,getFact} = require('../controllers/apiControllers.js')


router.post('/add_post', addPost)
router.get('/fetch_posts', fetchPosts)
router.post('/fetch_post', fetchPost)
router.post('/sendmessage',sendMessage)
router.get('/getfact',getFact)

module.exports = router