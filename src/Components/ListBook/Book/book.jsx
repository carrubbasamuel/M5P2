import { useEffect } from "react";
import "./book.css";

export default function Book({ categoryArray, category }) {

  //* Fade in animation use hook useEffect
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
  }, [category]);

  return (
    <div className="row justify-content-center align-items-start">
      <h1 className="text-center fs-1">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      {categoryArray.map((book) => {
        return (
          <div className="col-3">
            <img src={book.img} alt="book cover" />
            <h1>{book.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
