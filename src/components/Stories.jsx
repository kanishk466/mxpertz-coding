import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from "./Navbar.jsx"
import StoriesCard from './StoriesCard.jsx';
import Hero from './Hero.jsx';
const Stories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const itemsPerPage = 10; // Define how many items per page


  useEffect(() => {
    // Fetch data using Axios
    const fetchStories = async () => {
      try {
        const response = await axios.get('https://mxpertztestapi.onrender.com/api/sciencefiction');
        console.log(response.data)
        setStories(response.data); // Set the response data
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStories();
  }, []); 


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

    // Calculate the items to display based on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = stories.slice(indexOfFirstItem, indexOfLastItem);
  
    // Function to handle page changes
    const handleNextPage = () => {
      if (currentPage < Math.ceil(stories.length / itemsPerPage)) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      }
    };

  return (
    <>
    <Navbar/>
   <Hero/>
    <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">
       <StoriesCard stories={stories}/>
       
  
      </div>
    </div>
  </div>
   {/* Pagination Controls */}
   <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(stories.length / itemsPerPage)}>
          Next
        </button>
      </div>

  
    </>
  );
};

export default Stories;
