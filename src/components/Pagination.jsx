import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const maxPageNumbersToShow = 5; // Number of page numbers to display at a time

    const goToNextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    const getDisplayedPageNumbers = () => {
        if (nPages <= maxPageNumbersToShow) {
            return pageNumbers;
        } else {
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(nPages - 1, currentPage + 1);
            let displayedPages = pageNumbers.slice(startPage - 1, endPage);

            if (currentPage > 3) {
                displayedPages.unshift('...');
            }
            if (currentPage < nPages - 2) {
                displayedPages.push('...');
            }

            return [1, ...displayedPages, nPages];
        }
    };

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a className="page-link" 
                        onClick={goToPrevPage} 
                        href='#'>
                        Previous
                    </a>
                </li>

                {getDisplayedPageNumbers().map((pgNumber, index) => (
                    <li key={index} 
                        className={`page-item ${currentPage === pgNumber ? 'active' : ''} `}>
                        
                        {pgNumber === '...' ? (
                            <span className="page-link">...</span>
                        ) : (
                            <a onClick={() => setCurrentPage(pgNumber)}  
                                className='page-link' 
                                href='#'>
                                {pgNumber}
                            </a>
                        )}
                    </li>
                ))}

                <li className={`page-item ${currentPage === nPages ? 'disabled' : ''}`}>
                    <a className="page-link" 
                        onClick={goToNextPage}
                        href='#'>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;
