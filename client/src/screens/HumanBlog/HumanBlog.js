import React,{useState,useEffect} from 'react'
import Loading from '../../components/Loading'
import Post from '../../components/Post'
import Pagination from '../../components/Pagination'
import axios from 'axios'
import './Blog.css'
import { LinkContainer } from 'react-router-bootstrap'
const HumanBlog = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)
  useEffect(() => {
    async function fetchAllPosts() {
      try {
        let fetch_posts = await axios.get('/api/fetch_posts')
        if (loading) {
          const data = Array.from(fetch_posts.data)
          setLoading(false)
          setPosts(data)
        }
      } catch (err) {
        const msg = err.response ? err.response.data.message : err
      }
    }
    fetchAllPosts()
    return () => {
      setLoading(false)
    }
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="Addposts">
      <LinkContainer to="/humanblog/addpost"><h3 className="Addpost">Add Post</h3></LinkContainer>
      <div className='px-5 posts'>
          
          {posts === null ? (
            <Loading />
          ) : posts.length === 0 ? (
            <h2>No Posts Available</h2>
          ) : (
            <Post posts={currentPosts} loading={loading} />
          )}
          
          <div>
           <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            /> 
           </div>  
          
        </div>


    </div>
  )
}

export default HumanBlog
