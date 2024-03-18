import './App.css'
import Blogs from './component/Blogs/Blogs'
import BookMarks from './component/Books marks/BookMarks'
import Header from './component/header/Header'

function App() {

  return (
    <>
    <Header></Header>
    <div className='md:flex'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
    </div>
    </>
  )
}

export default App
