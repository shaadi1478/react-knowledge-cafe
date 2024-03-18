import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookMark, handlemarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(ref => ref.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                     key={blog.id}
                      blog={blog}
                      handleAddToBookMark={handleAddToBookMark}
                      handlemarkAsRead={handlemarkAsRead}
                      ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMark: PropTypes.func,
    handlemarkAsRead: PropTypes.func
}

export default Blogs;