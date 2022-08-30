import React from 'react'
import "./Blog.css"
const Blog = () => {
    return (<>
  <div className='blog'>
<h1  className="blog_head">Blog</h1>
    </div>
    <div className='serv1'> <div className="icon" > 
<img src="./images/cat-post/cat-post-1.jpg" alt=""/>
<div className='icon_desc'><h6>Social Life</h6>
Enjoy your social life together</div>
</div>
</div>
<div className='serv1'> <div className="icon" > 
<img src="./images/cat-post/cat-post-2.jpg" alt=""/>
<div className='icon_desc'><h6>Politics</h6>
Be a part of politics</div>
</div>
</div>
<div className='serv1'> <div className="icon" > 
<img src="./images/cat-post/cat-post-3.jpg" alt=""/>
<div className='icon_desc'><h6>Food</h6>
Let the food be finishe</div>
</div>
</div>



    </>
      )
    }
    
    export default Blog