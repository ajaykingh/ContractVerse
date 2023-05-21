import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // import your stylesheet

const Home = () => {
  return (
    <div className="home ">
      <div>
      <a className="" href="/home">
                <img
                  src="/cv.png"
                  height={200}
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
      </div>
      <h1 className="home__title">Welcome to ContractVerse!</h1>
      <p className="home__description">Here, you can browse and build a variety of smart contracts.</p>
      <nav className='mb-3'>
        <ul className="home__nav">
          <li className="home__nav-item">
            <Link to="/contracts" className="home__nav-link">Browse Contracts</Link>
          </li>
          <li className="home__nav-item">
            <Link to="/create-contract" className="home__nav-link">Create a Contract</Link>
          </li>
          <li className="home__nav-item">
            <Link to="/my-contracts" className="home__nav-link">My Contracts</Link>
          </li>
        </ul>
      </nav>
      <>
  {/* Carousel wrapper */}
  <div
    id="carouselMaterialStyle"
    className="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    {/* Indicators */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    {/* Inner */}
    <div className="carousel-inner rounded-5 shadow-4-strong">
      {/* Single item */}
      <div className="carousel-item active">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
          className="d-block w-100"
          alt="Sunset Over the City"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
          className="d-block w-100"
          alt="Canyon at Nigh"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
          className="d-block w-100"
          alt="Cliff Above a Stormy Sea"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
      </div>
    </div>
    {/* Inner */}
    {/* Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselMaterialStyle"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-mdb-target="#carouselMaterialStyle"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Carousel wrapper */}
</>

  

    </div>
    );
    
};

export default Home;

