import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ onChangePage }) {
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={4}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
