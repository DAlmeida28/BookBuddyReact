import {Routes, Route} from 'react-router-dom'
import BookList from './BookList.jsx'
import {useState} from 'react'  

function App() {
  const [bookDetails, setBookDetails] = useState('');

  return (
    <>

    <Routes>
      <Route path="/" element={<BookList setBookDetails={setBookDetails}/>}/>
    </Routes>
    </>
  )
}

export default App
