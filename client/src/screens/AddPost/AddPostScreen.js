import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
const AddPostScreen = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({ title: '', content: '' })
  const [postAdded,setPostAdded] = useState(false)
  const addPost = async (e) => {
    e.preventDefault()
    try {
      const post = await axios.post(
        '/api/add_post',
        {
          title: formData.title,
          content: formData.content,
        },
      )
      if (post.status === 201) {
        setPostAdded(true)
      }
    } catch (err) {
      const msg = err.response ? err.response.data.message : err
    }
  }
  return (
    <div id='mt'>
      <LinkContainer to='/humanblog'><h2>Go to Human Blog</h2></LinkContainer>
      <h3 className='text-center'>Add new Post</h3>
      <Form className='w-75 m-auto text-center' onSubmit={addPost}>
        <Form.Group className='my-2' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Post Title'
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className='my-2' controlId='content'>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as='textarea'
            rows={8}
            placeholder='Enter Content'
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
        </Form.Group>

        <Button className='mt-3' variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      {postAdded?(<div><h3>Post Added Successfully</h3></div>):null}
    </div>
  )
}

export default AddPostScreen
