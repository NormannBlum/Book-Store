function generateHTMLContent(book, bookIndex) {
  return `
    <div class="book-main-container">
      <h2>${book.name}</h2>
      <hr>
      <div class="image-container">
        <img class="book-image" src="./assets/icons/buch1.png" alt="bookcover">
      </div>     
      <hr>
      <div class="book-info-container">
        <div class="price-like-container">
          <div class="price-book"> ${book.price.toFixed(2)}€</div>
          <div class="like-book">
            <span id="like-count-${bookIndex}">${book.likes}</span>
            <img id="dislike-button-${bookIndex}" onclick="toggleLike(${bookIndex})" src="./assets/icons/unlike-heart-icon.png" alt="" ${book.liked ? 'class="d-none"' : ''}>
            <img id="like-button-${bookIndex}" onclick="toggleLike(${bookIndex})" src="./assets/icons/like-heart.icon.png" alt="" ${!book.liked ? 'class="d-none"' : ''}>
          </div>
        </div>
        <div class="book-info">
          <table>
            <tbody>
              <tr>
                <td>Author</td>
                <td>:</td>
                <td>${book.author}</td>
              </tr>
              <tr>
                <td>Erscheinungsjahr</td>
                <td>:</td>
                <td>${book.publishedYear}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>:</td>
                <td>${book.genre}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>    
      <hr>
      <div id="comments-${bookIndex}" class="comments-container">
        ${generateHTMLComments(book)}
      </div>
      <div class="input-container">
        <input id="input-${bookIndex}" type="text" placeholder="Schreibe einen Kommentar ...">
        <img onclick="addNewComment(${bookIndex})" class="send-icon" src="./assets/icons/send.png" alt="">
      </div>
    </div>
    `;
}


function generateHTMLComments(book) {
  let commentsHTML = '<h3>Kommentare:</h3><table>';

  for (let commentIndex = 0; commentIndex < book.comments.length; commentIndex++) {
    let comment = book.comments[commentIndex];
    commentsHTML += `
      <tr>
        <td>[${comment.name}]</td>
        <td>:</td>
        <td>${comment.comment}</td>
      </tr>
    `;
  }

  commentsHTML += '</table>';
  return commentsHTML;
}