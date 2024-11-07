function generateLibraryContent(book) {
  return `
    <div class="book-item">
        <h2>${book.name}</h2>
        <p>Autor: ${book.author}</p>
        <p>Erscheinungsjahr: ${book.publishedYear}</p>
        <p>Genre: ${book.genre}</p>
        <p>Preis: €${book.price.toFixed(2)}</p>
        <p>Likes: ${book.likes}</p>
    </div>
    `;
}

// bookIndex später in die Funktion wegen comments und likes?
