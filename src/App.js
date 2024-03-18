import "./assets/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/books/BookList";

function App() {
  return (
   <div>
    <Header />
    <BookList />
    <Footer />
   </div>
  );
}

export default App;
