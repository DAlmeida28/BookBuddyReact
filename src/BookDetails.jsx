import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const SingleBookDetails = () => {
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
    </>
  )
}

export default SingleBookDetails