import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'  

import BookList from './BookList.jsx'
import BookDetails from './BookDetails.jsx';

function App() {
  const [bookDetails, setBookDetails] = useState('');

  return (
    <>

    <Routes>
      <Route path="/" element={<BookList setBookDetails={setBookDetails}/>}/>
      <Route path="/bookdetails/:bookid" element={<BookDetails bookDetails={bookDetails} setBookDetails={setBookDetails}/>}/>
    </Routes>
    </>
  )
}

export default App
