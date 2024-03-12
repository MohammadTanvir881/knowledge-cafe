import { useEffect, useState } from "react";


const Blogs = () => {
    const [data , setData]=useState();
    useEffect(()=>{
        fetch('blog.json')
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;