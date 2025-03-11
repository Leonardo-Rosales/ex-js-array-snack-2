const books = [
  {
    title: 'React Billionaire',
    pages: 250,
    author: {
      name: 'Alice',
      age: 35,
    },
    available: false,
    price: '101€',
    tags: ['advanced', 'js', 'react', 'senior'],
  },
  {
    title: 'Advanced JS',
    pages: 500,
    author: {
      name: 'Bob',
      age: 20,
    },
    available: true,
    price: '25€',
    tags: ['advanced', 'js', 'mid-senior'],
  },
  {
    title: 'CSS Secrets',
    pages: 320,
    author: {
      name: 'Alice',
      age: 17,
    },
    available: true,
    price: '8€',
    tags: ['html', 'css', 'junior'],
  },
  {
    title: 'HTML Mastery',
    pages: 200,
    author: {
      name: 'Charlie',
      age: 50,
    },
    available: false,
    price: '48€',
    tags: ['html', 'advanced', 'junior', 'mid-senior'],
  },
];

//snack 1

const longBooks = books.filter((book) => book.pages > 300);
console.log(longBooks);

const longBooksTitles = longBooks.map((book) => book.title);
console.log(longBooksTitles);

longBooksTitles.forEach((title) => console.log(title));

//snack 2

const availableBooks = books.filter((book) => book.available);
console.log(availableBooks);

const discountedBooks = availableBooks.map((book) => {
  const price = parseFloat(book.price.replace('€', ''));
  const discountedPrice = (price * 0.8).toFixed(2);
  return { ...book, price: `${discountedPrice}€` };
});

console.log(discountedBooks);

const fullPriceBooks = discountedBooks.find((book) => {
  const price = parseFloat(book.price.replace('€', ''));
  return price % 1 === 0;
});

console.log(fullPriceBooks);

//snack 3

const authors = books.map((book) => book.author);
console.log(authors);

const areAuthorsAdults = authors.every((author) => author.age >= 18);
console.log(areAuthorsAdults);

if (areAuthorsAdults) {
  authors.sort((a, b) => a.age - b.age);
} else {
  authors.sort((a, b) => b.age - a.age);
}

console.log(authors);

//snack 4

const ages = books.map((book) => book.author.age);
console.log(ages);

const agesSum = ages.reduce((acc, age) => acc + age, 0);
console.log(agesSum);

const agesAvg = agesSum / ages.length;
console.log(agesAvg);
