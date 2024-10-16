import React from "react";
import { Link } from "react-router-dom";
const StoriesCard = ({ stories }) => {
  return (
    <>
      {stories.map((story) => (
        <div key={story.id} class="col-md-4">
          <Link to={`/story/${story._id}`}>
            <div class="card mb-4 shadow-sm">
              {story.Image && story.Image[0] && (
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src={`https://ik.imagekit.io/dev24/${story.Image[0]}`}
                  alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbubble.com%2Fi%2Fposter%2FIMAGE-NOT-FOUND-by-ZexyAmbassador%2F142878675.LVTDI&psig=AOvVaw3IeSl8M1r-O388QQrYS9B2&ust=1729160179850000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCIz-XVkokDFQAAAAAdAAAAABAE"
                />
              )}
              {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

              <div class="card-body">
                <p>{story.Storyadvenure.Storytitle}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn  btn-outline-secondary">
                      Status: {story.Status}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default StoriesCard;
