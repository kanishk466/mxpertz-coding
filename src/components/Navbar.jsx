import React from 'react'

const Navbar = () => {
  return (

     <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container-fluid">
   
        <a class="navbar-brand text-white" href="#">
           BrainlyLingo
        </a>
        

        <div class="center-items">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Leaderboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Quiz Time</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Genre</a>
            </li>
          </ul>
        </div>

      
        <div class="d-flex">
          <button class="btn btn-signout">Sign Out</button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar