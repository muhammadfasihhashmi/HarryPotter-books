import { harryPotterBooks } from "../data.js";

//all books component
export function Books() {
  return (
    <div className="main">
      <h2>OUR BOOKS</h2>
      <p>
        Authentic JK rowling books. 7 interesting books to choose from. All from
        our stores, all well packed, all neat and clean.
      </p>
      <ul className="books sold-out">
        {harryPotterBooks.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            releaseDate={book.releaseDate}
            description={book.description}
            coverImg={book.cover}
            soldOut={book.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}
//single book component
function Book({ title, releaseDate, description, coverImg, soldOut }) {
  return (
    <li className={`book ${soldOut ? "sold-out" : ""}`}>
      <img src={coverImg} alt="cover iamge" className="" />
      <h3>{title}</h3>
      {soldOut ? (
        <h3>soldOut</h3>
      ) : (
        <>
          <p>{description}</p>
          <span>{releaseDate}</span>
        </>
      )}
    </li>
  );
}
