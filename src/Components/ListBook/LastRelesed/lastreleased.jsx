import { useEffect, useState } from "react";
import Book from "./Book/book.jsx";
import Empty from "./Empty/empty.jsx";
import PaginationComponent from "./Pagination/pagination.jsx";
import "./lastrelesed.css";

export default function LastRelesed({ search, categoryArray, category }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState([]);


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
    setCurrentPage(1);
  }, [category]);


  //* Filter book by search
  useEffect(() => {
    if (search === "") {
      setFilter(categoryArray);
    } else {
      let filterArray = categoryArray.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filterArray);
    }
  }, [search, categoryArray]);



  return (
    <div>
      <div className="row justify-content-center align-items-start">
        {filter.length > 0 ? filter.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((book, index) => (
            <Book key={index} currentBook={book} category={category} />
          ))
        : <Empty />
        }
      </div>

      <div className="d-flex justify-content-center align-items-start mt-5">
        {
          filter.length >0
          && <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          
        />
        }
        
      </div>
    </div>
  );
}
