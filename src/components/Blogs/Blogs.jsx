import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddClick,handleReadTime}) => {
   const [blogs , setBlogs] = useState([]);
   useEffect(()=>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=> setBlogs(data))
   },[])

    return (
        <div className="md:w-2/3">
             <h1 className="text-2xl font-bold border-b-2 py-2">Blogs : {blogs.length} </h1>
             {
                blogs.map((blog)=><Blog handleAddClick={handleAddClick} blog={blog} key={blog.id} handleReadTime={handleReadTime}></Blog>)
             }
        </div>
    );
};
Blogs.propTypes ={
    handleAddClick: PropTypes.func,
    handleReadTime: PropTypes.func,
}

export default Blogs;