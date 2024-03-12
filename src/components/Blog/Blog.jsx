import PropTypes from 'prop-types';

const Blog = ({blog,handleAddClick,handleReadTime}) => {
    // console.log(blog)
    const {author,id , author_img,cover,hashtag,posted_date,reading_time,title}=blog;
   
    return (
        <div className='my-10'>
             <div>
                 <img className='w-full' src={cover} alt="" />
                 <div className='flex justify-between items-center'>
                     <div className='flex gap-5 my-3'>
                          <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                          <div>
                               <h1 className='text-xl font-bold'>{author}</h1>
                               <p>{posted_date}</p>

                          </div>
                     </div>
                     <div className='flex gap-2 items-center'>
                         <h1>{reading_time} min</h1>
                         <button onClick={()=>handleAddClick(blog)} className='text-black bg-gray-200 px-5 rounded-sm py-1'> Read</button>
                     </div>
                 </div>
                 <div>
                    <h1 className='text-3xl font-bold '>{title}</h1>
                    <div>
                        {
                            hashtag.map((hash,idx)=><span className='mr-3' key={idx}><a href="#">{hash}</a></span>)
                        }
                    </div>
                 </div>
                 <div className='text-violet-700 text-xl underline my-3'>
                    <button onClick={()=>handleReadTime(reading_time,id)} className='underline font-bold'>Mark As Read</button>
                 </div>
             </div>
        </div>
    );
};
Blog.propTypes ={
  blog : PropTypes.object.isRequired,
  handleAddClick : PropTypes.func,
  handleReadTime:PropTypes.func,
 
}

export default Blog;