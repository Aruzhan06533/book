import BookCard from "./BookCard";
import loading from "../loading";
import error from "../error";
import { useEffect, useState } from "react";

function BookList () {
    const[books, setBooks] = useState([]);
    const [isLoadding, setIsLoading]=useState(false);
    const [isError, setIsError]=useState(false);
    useEffect(() => {
        async function fetchBooks(){
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://65f858f3df151452460f2c23.mockapi.io/book"
                );
                const data = await res.json();
                setBooks(data);
            } catch (e){
                console.error(e);
                setIsError(true);
            } finally{
                setIsLoading(false);
            }
        }
        fetchBooks();

    },[]);
    return (
        <section class="book-page">
        <div class="container">
            <h1 class="title">Choose your book</h1>
            <div class="row">
                {isLoadding ? (<loading />):(books.map((book) => <BookCard book={book} key={book.id}/>))}
            </div>
            {isError && <error />}
        </div>
    </section>
    );
}

export default BookList;