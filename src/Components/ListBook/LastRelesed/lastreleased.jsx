import { useEffect } from "react";
import { useSelector } from "react-redux";
import Book from "./Book/book";
import Empty from "./Empty/empty";
import "./lastrelesed.css";


export default function LastRelesed() {
  
  const originalBookArray = useSelector((state) => state.root.book.originalBookArray);
  const bookArray = useSelector((state) => state.root.book.bookArray);




  useEffect(() => {
    const fade = document.querySelectorAll("div.col-3");
    fade.forEach((element) => {
      element.classList.add("fade");
    });


    //*Clean up function
    setTimeout(() => {
      fade.forEach((element) => {
        element.classList.remove("fade");
      });
    }, 1000);
  }, [originalBookArray]); 


  return (
      <div className="row justify-content-center align-items-start">
        {bookArray.length > 0 ? bookArray.map((book, index) => (
            <Book key={index} currentBook={book} />
          ))
        : <Empty />
        }
      </div>
  );
}
