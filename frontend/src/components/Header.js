
import React from "react";

function Header (){
    return( 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" style={{color:"black"}}>Company Name</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/add">Add Hotel</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/all">View Hotel</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Delete Hotel</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">Update Hotel</a>
      </li>
        
      
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{color:"black"}}></input>
      <button class="btn btn-outline-success" type="submit" style={{color:"black"}}>Search</button>
    </form>
  </div>
</nav>



     

    )
}

export default Header;