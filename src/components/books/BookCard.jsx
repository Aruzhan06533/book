function BookCard ({ book }) {
    return (
        <div className="book-card">
            <div className="book-img">
                <img src={book.imageUrl} alt={book.name} />
            </div>
            <h3 className="book-name">{book.name}</h3>
            <h4 className="book-author">{book.author}</h4>
            <h4 className="book-price">{book.price}</h4>
        </div>
    );
}
export default BookCard;