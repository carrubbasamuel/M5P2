import { useEffect } from "react";
import { useSelector } from "react-redux";
import Book from "./Book/book";
import Empty from "./Empty/empty";
import BookPagination from "./Pagination/pagination";
import Review from "./Review/review";
import "./lastrelesed.css";

export default function LastRelesed() {
  const { bookArray, currentPage, originalBookArray, isSearchMode } = useSelector((state) => state.root.book);
  const mode = useSelector((state) => state.root.modeRedux.mode);

  useEffect(() => {
    const fade = document.querySelectorAll("div.halo");
    fade.forEach((element) => {
      element.classList.add("fade");
    });

    // Funzione di pulizia
    setTimeout(() => {
      fade.forEach((element) => {
        element.classList.remove("fade");
      });
    }, 1500);
  }, [originalBookArray, currentPage]);

  return (
    <div className={mode === 'light' ? "bg-light" : "bg-dark"}>
      <div className="row notover">
        <div className="col-12 col-md-7">
          <div className="row justify-content-center align-items-center">
            {bookArray.length > 0 ? (
              bookArray.map((book, index) => (
                <Book key={index} currentBook={book} />
              ))
            ) : (
              <Empty />
            )}
          </div>
          {isSearchMode ? null : <BookPagination />}
        </div>
        <Review />
      </div>
    </div>
  );
}
