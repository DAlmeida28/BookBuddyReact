import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const SingleBookDetails = ({ token }) => {
  const [singleBook, setSingleBook] = useState({});
  const { bookid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {

    const getBookDetails = async () => {
      const reponse = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookid}`)
      const bookObject = await reponse.json();
      setSingleBook(bookObject.book);
    }
    getBookDetails();
  }, [])

const checkoutBook = async () => {
  const checkoutResponse = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookid}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      available: false, 
    })
  }
  )
  const reply = await checkoutResponse.json();
  console.log(reply);
}
  return (
    <>
      <section>
        <h1>{singleBook.title} </h1>
        <p><img src={singleBook.coverimage} height="800px" width="600px" /></p>
        <p>Author: {singleBook.author}</p>
        <p>Description: {singleBook.description}</p>
        <p>Book ID: {bookid}</p>
      </section>
      <button onClick={() => {navigate('/')}}>Return to Book List </button>
    
        {localStorage.getItem('token') ? <button onClick={checkoutBook}>Checkout book.</button> : null}
    </>
  )
}

export default SingleBookDetails