import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'  

import BookList from './BookList.jsx';
import BookDetails from './BookDetails.jsx';
import Navbar from './Navbar.jsx';
import Auth from './Auth.jsx'
import MyAccount from './MyAccount.jsx';

function App() {
  const [bookDetails, setBookDetails] = useState('');
  const [token, setToken] = useState('');
  const [userAccount, setUserAccount] = useState({});

  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<BookList setBookDetails={setBookDetails}/>}/>
      <Route path="/bookdetails/:bookid" element={<BookDetails bookDetails={bookDetails} setBookDetails={setBookDetails} token={token}/>}/>
      <Route path="/auth/" element={<Auth setToken={setToken} setUserAccount={setUserAccount} userAccount={userAccount} token={token} />}/>
      <Route path="/myaccount" element={<MyAccount setUserAccount={setUserAccount} userAccount={userAccount}/>}/>
    </Routes>
    </>
  )
}

export default App
