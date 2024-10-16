import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from "./Navbar.jsx"
import StoriesCard from './StoriesCard.jsx';
import Hero from './Hero.jsx';


import Pagination from './Pagination.jsx';

const Stories = () => {


  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);




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

  const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = stories.slice(indexOfFirstRecord, indexOfLastRecord);
    console.log("currentRecord " , currentRecords);
    
    const nPages = Math.ceil(stories.length / recordsPerPage)
  

  return (
    <>
    <Navbar/>
   <Hero/>

   <Pagination nPages={nPages} currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
    <div class="album py-5">
    <div class="container">

      <div class="row">
       <StoriesCard stories={currentRecords}/>
       
  
      </div>
    </div>
  </div>



    </>
  );
};

export default Stories;
