function loadBooksFromLocalStorage() {
    let storedBooks = localStorage.getItem('booksData');
    if (storedBooks) {
      books = JSON.parse(storedBooks);
    }
  }
  
  
  function saveBooksToLocalStorage() {
    localStorage.setItem('booksData', JSON.stringify(books));
  }