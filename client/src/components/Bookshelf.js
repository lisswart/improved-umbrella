import React from 'react'

function Bookshelf({ user }) {
  const books = user.books;

  const displayBooks = books.map(book => {
    return (
      <p key={book.id}>{book.title}</p>
    );
  });
  return (
    <div>
      {displayBooks}
    </div>
  )
}

export default Bookshelf
