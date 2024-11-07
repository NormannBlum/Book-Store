function renderBooks() {
  let library = document.getElementById("book-library");
  library.innerHTML = "";

  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    let book = books[bookIndex];
    library.innerHTML += generateLibraryContent(book, bookIndex);
  }
}

function init() {
  renderBooks();
}
