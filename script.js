function renderBooks() {
  let library = document.getElementById("book-library");
  library.innerHTML = "";

  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    let book = books[bookIndex];
    library.innerHTML += generateHTMLContent(book, bookIndex);
  }
}


function toggleLike(bookIndex) {
  let book = books[bookIndex];

  if (book.liked) {
    book.likes -= 1;
    book.liked = false;
  } else {
    book.likes += 1;
    book.liked = true;
  }

  saveBooksToLocalStorage();
  renderBooks(); 
}


function updateLikeCount(bookIndex) {
  let likeCountElement = document.getElementById(`like-count-${bookIndex}`);
  likeCountElement.innerHTML = books[bookIndex].likes;
}


function addNewComment(bookIndex) {
  let input = document.getElementById(`input-${bookIndex}`);
  if (input.value) {
    let newComment = {
      name: "Du",
      comment: input.value
    };
    books[bookIndex].comments.push(newComment);
    saveBooksToLocalStorage();
    renderBooks();
    input.value = '';
  }
}


function init() {
  loadBooksFromLocalStorage();
  renderBooks();
}