import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import PropTypes from 'prop-types'

function App() {

  const[click , setClick] = useState([]);
  const[readTime, setReadTime]=useState(0);

  const handleAddClick=(blog)=>{
    // console.log(blog)

    const newClick = [...click , blog];
    
    setClick(newClick)
   
    // setClick(reminingBookMarks)

  }
  const handleReadTime=(time,id)=>{
    // console.log('remove book mark',id)
    // console.log('read time',typeof time)
    let newReadTime = readTime+time;
    setReadTime(newReadTime)
    const remainingBookMark = click.filter(bookmark=> bookmark.id !==id);
    setClick(remainingBookMark);
   

  }

  return (
    <>
     <Header></Header>
     <div className='md:flex container mx-auto px-5 py-5'>
     <Blogs handleAddClick={handleAddClick} handleReadTime={handleReadTime}></Blogs>
     <Bookmarks bookmarks={click} readTime={readTime}></Bookmarks>
     </div>
     
    </>
  )
}

App.prototypes={
  handleReadTime:PropTypes.func,
}

export default App
