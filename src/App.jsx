import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import BookMarks from './component/Books marks/BookMarks'
import Header from './component/header/Header'

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const handleAddToBookMark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookMarks(newBookmark);
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookMark ={handleAddToBookMark}></Blogs>
      <BookMarks bookmarks={bookmarks}></BookMarks>
    </div>
    </>
  )
}

export default App
