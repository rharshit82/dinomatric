const SinglePost = ({ post }) => {
    return (
      <div>
        <div className='post'>
          <h2>{post.title}</h2>
          <p className='my-3'>
            Posted on {post.createdAt.slice(0, 10)} at{' '}
            {post.createdAt.split('T')[1].split('.')[0]}
          </p>
          <p>{post.content}</p>
        </div>
      </div>
    )
  }
  
  export default SinglePost
  