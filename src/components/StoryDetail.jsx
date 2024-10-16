import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Hero from './Hero';

const StoryDetail = () => {
  
  const { id } = useParams(); // Get the story ID from the URL
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to hold any error messages

  useEffect(() => {
    const fetchStoryDetails = async () => {
      try {
        // Fetching the story details using Axios
        const response = await axios.get(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`);
        setStory(response.data); // Update the state with the fetched data
      } catch (err) {
        console.error('Error fetching story details:', err);
        setError('Failed to fetch story details.'); // Set error message if fetching fails
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    fetchStoryDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Show loading message while fetching
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>; // Show error message if there was an error
  }

  if (!story) {
    return <div className="text-center">Story not found.</div>; // Show message if story not found
  }

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container mt-4">
      {/* Story Title and Status */}
      <div className="row mb-4">
        <div className="col-md-4">
          <h1>{story.Title}</h1>
          <p><strong>Status:</strong> {story.Status}</p>
          <div className="mb-3">
            {story.Image && story.Image.map((img, index) => (
              <img
                key={index}
                src={`https://ik.imagekit.io/dev24/${img}`}
                alt={`Image ${index + 1}`}
                className="img-fluid mb-2"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Story Adventure Section */}
      <div className="mt-4">
        <h3>Story Adventure:</h3>
        <div className="row">
          {story.Storyadvenure && story.Storyadvenure.content.map((contentItem, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="story-adventure">
                {contentItem.Storyimage && contentItem.Storyimage.map((storyImg, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={`https://ik.imagekit.io/dev24/${storyImg}`}
                    alt={`Story Image ${imgIndex + 1}`}
                    className="img-fluid mb-2"
                  />
                ))}
                {contentItem.Paragraph.map((para, paraIndex) => (
                  <p key={paraIndex}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brain Quest Questions Section */}
      <div className="mt-4">
        <h3>Brain Quest Questions:</h3>
        <ul className="list-group">
          {story.Brainquest && story.Brainquest.map((question, index) => (
            <li key={index} className="list-group-item">
              <h5>{question.Question}</h5>
              <p><strong>Answer:</strong> {question.Answer}</p>
              <p><strong>Options:</strong> {question.Option.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Word Exploration Section */}
      <div className="mt-4">
        <h3>Word Exploration:</h3>
        <div className="row">
          {story.Wordexplore && story.Wordexplore.map((word, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="card">
                <img 
                  src={`https://ik.imagekit.io/dev24/${word.Storyimage[0]}`} 
                  alt={word.Noun} 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">{word.Storytitle}</h5>
                  <p className="card-text">{word.Storyttext}</p>
                  <p><strong>Synonyms:</strong> {word.Synonyms}</p>
                  <p><strong>Antonyms:</strong> {word.Antonyms}</p>
                  <p><strong>Noun:</strong> {word.Noun}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    </>
 
  );
};

export default StoryDetail;
