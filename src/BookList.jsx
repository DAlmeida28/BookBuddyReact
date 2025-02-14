import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const BookList = ({ setBookDetails }) => {
  const [allBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
      const booksArray = await response.json();
      setAllBooks(booksArray.books);
    }
    getBooks();
  }, [])

  return (
    <>
      <h1>List of Our Books: </h1>

      <section id="BookList">
        {allBooks.map((book) => {

          return (
            <p
              className="Book"
              key={book.id}
              onClick={() => {
                setBookDetails(book);
                navigate(`/bookdetails/${book.id}`);
              }
              }>
              <img src={book.coverimage} height="450px" width="200px" />
            </p>
          )
        })}
      </section>
    </>
  )
}

export default BookList