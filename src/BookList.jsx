import { useEffect, useState } from "react"

const BookList = () => {
  const[allBooks, setAllBooks] = useState([]);

useEffect(() => {
  const getBooks = async () => {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
    const booksArray = await response.json();
    setAllBooks(booksArray.books);
  }
  getBooks();
},[])

return(
  <>
    <h1>List of Our Books: </h1>

  <section id="BookList">
  {allBooks.map((book) => {
    
    return(
      <p key={book.id}>
        {book.title}
        <img src={book.coverimage} height="450px" width="200px"/>
        </p>
    )
  })}
    </section>
    </>
  )
}

export default BookList