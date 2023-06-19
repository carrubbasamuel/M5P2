import { useEffect, useState } from "react";
import Empty from "./Empty/empty.jsx";
import PaginationComponent from "./Pagination/pagination";
import "./book.css";

export default function Book({ search, categoryArray, category }) {
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
            <div className="col-3" key={index}>
              <img src={book.img} alt="book cover" />
              <h1>{book.title}</h1>
            </div>
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
