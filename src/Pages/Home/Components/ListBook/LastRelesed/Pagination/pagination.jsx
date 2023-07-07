import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../../../../redux/reducers/bookAction';
import './pagination.css';

const BookPagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.root.book.currentPage);
  const totalPages = useSelector((state) => state.root.book.totalPages);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <Pagination className='pagination'>
      
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <Pagination.Item
          key={page}
          href='#books'
          active={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      
    </Pagination>
  );
};

export default BookPagination;
