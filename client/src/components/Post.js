import React from 'react';
import './post.css';
import Pic7 from '../assets/pic7.png';
import { LinkContainer } from 'react-router-bootstrap'
const Post = ({ posts }) => {
  return (
    <>
      <div className="container mainpost">
        <h1 className=' text-center my-3'>Dino Fun</h1>
        <p> How will you defeat a dino if it comes infront of you. Suggets something by writing blog. 
          Dont you think this is fun activity !!!!</p>
        <div className='Postss'>
          {posts.map((post) => (
            <div className='my-4 mx-auto  postid' key={post._id}>
              <LinkContainer to={`/notice/${post._id}`}>
                <h2 className='links postext'>{post.title}</h2>
              </LinkContainer>
              <p className='postdate'>
                Posted on {post.createdAt.slice(0, 10)} at
                {post.createdAt.split('T')[1].split('.')[0]}
              </p>
              <br />
              <p className='postcontent'>{post.content}</p>
              <img className='dinopic' src={Pic7}/>  
            </div>

          
          ))}

        </div>
      </div>
    </>
  )
}

export default Post
