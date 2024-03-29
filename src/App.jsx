import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import BookMarks from './component/Books marks/BookMarks'
import Header from './component/header/Header'

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] =  useState(0)

  const handleAddToBookMark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookMarks(newBookmark);
  }

  const handlemarkAsRead =(id, time )=> {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    //remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookMarks(remainingBookMarks)
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookMark ={handleAddToBookMark} handlemarkAsRead={handlemarkAsRead}></Blogs>
      <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
    </div>
    </>
  )
}

export default App
