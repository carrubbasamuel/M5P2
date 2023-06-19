import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './pagination.css';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
    
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />

      
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}

      <Pagination.Next
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default PaginationComponent;
