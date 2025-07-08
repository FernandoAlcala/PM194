const fetchBooks = async (category) => {
  const query = encodeURIComponent(`subject:${category}`);
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Error fetching books');
  }

  const data = await res.json();
  if (!data.items) {
    return [];
  }

  // Agrupar libros por autor
  const authorMap = {};

  data.items.forEach((book) => {
    const authors = book.volumeInfo.authors || ['Autor desconocido'];
    authors.forEach((author) => {
      if (!authorMap[author]) {
        authorMap[author] = [];
      }
      authorMap[author].push(book);
    });
  });

  const booksSelected = [];

  // 1) Autores con 2 o más libros (hasta 3 libros por autor)
  Object.keys(authorMap).forEach((author) => {
    const books = authorMap[author];
    if (books.length >= 2) {
      const numBooks = Math.min(3, books.length);
      booksSelected.push(...books.slice(0, numBooks));
    }
  });

  // 2) Si hay menos de 10 libros, agregar libros de autores con solo 1 libro
  if (booksSelected.length < 10) {
    const singleBooks = [];
    Object.keys(authorMap).forEach((author) => {
      const books = authorMap[author];
      if (books.length === 1) {
        singleBooks.push(books[0]);
      }
    });

    const needed = 10 - booksSelected.length;
    booksSelected.push(...singleBooks.slice(0, needed));
  }

  // 3) Si sigue habiendo menos de 10, tomar libros sin autor o adicionales (por si acaso)
  if (booksSelected.length < 10) {
    const allBooks = data.items.filter(book => !booksSelected.includes(book));
    const needed = 10 - booksSelected.length;
    booksSelected.push(...allBooks.slice(0, needed));
  }

  return booksSelected;
};

export default fetchBooks;
