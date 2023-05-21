import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const logout = () => {
    // 👇️ navigate to /
    sessionStorage.removeItem('user');
    navigate('/main/home');
  };

  return (
    <div>


      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="/cv.png"
              height={25}
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search" />
            </span>
            <button type="button" className="btn btn-primary" onClick={logout}>
              Log Out
            </button>

          </form>
        </div>
      </nav>






    </div>
  )
}

export default Navbar