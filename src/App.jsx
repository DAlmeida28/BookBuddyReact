import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'  

import BookList from './BookList.jsx';
import BookDetails from './BookDetails.jsx';
import Navbar from './Navbar.jsx';
import Auth from './Auth.jsx'

function App() {
  const [bookDetails, setBookDetails] = useState('');
  const [token, setToken] = useState('');

  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<BookList setBookDetails={setBookDetails}/>}/>
      <Route path="/bookdetails/:bookid" element={<BookDetails bookDetails={bookDetails} setBookDetails={setBookDetails}/>}/>
      <Route path="/auth" element={<Auth setToken={setToken} />}/>
    </Routes>
    </>
  )
}

export default App
