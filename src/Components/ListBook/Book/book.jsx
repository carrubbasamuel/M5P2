import { useEffect, useState } from "react";
import PaginationComponent from "./Pagination/pagination";
import "./book.css";

export default function Book({ categoryArray, category }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(categoryArray.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
    <div>
    {/* Contenuto della pagina */}
    <div className="row justify-content-center align-items-start">
      {categoryArray
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((book, index) => (
          <div className="col-3" key={index}>
            <img src={book.img} alt="book cover" />
            <h1>{book.title}</h1>
          </div>
        ))}
    </div>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
