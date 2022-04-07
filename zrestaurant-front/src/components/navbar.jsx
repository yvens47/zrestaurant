import React from 'react'

function Navbar (props){

  return (
    <nav className="navbar navbar-expand-lg navbar-light  fixed-top bg-light-primary border-bottom">
                            <div className="container">
                                    <a className="navbar-brand fw-bold" href="/">Stash</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                    <li className="nav-item">
                                                            <a className="nav-link active" aria-current="page" href="/">
                                                                    <span className="material-icons">
                                                                    home
                                                                    </span>Home</a>
                                                    </li>
                                                    <li className="nav-item">
                                                            <a className="nav-link" href="/recipes">
                                                              <span className="material-icons">
    format_list_numbered_rtl
    </span>Recipes</a>
                                                    </li>
                                               <li className="nav-item">
                                                            <a className="nav-link" href="/diet">
                                                              <span className="material-icons">
    egg_alt
    </span>Diet</a>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    Planner
                                                            </a>
                                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                              <li className="nav-item">
                                                                      <a href="/my-calendar" className="nav-link ">
                                                                        <span className="material-icons">
              calendar_month
              </span>My Calendar


                                                                      </a>
                                                              </li>
                                                                    <li>
                                                                            <hr className="dropdown-divider"/>
                                                                    </li>


                                                                                    <li className="nav-item">
                                                                                            <a href="/users/my-plan" className="nav-link ">
                                                                                              <span className="material-icons">
                                    set_meal
                                    </span>Meal
                                                                                              Planner


                                                                                            </a>
                                                                                    </li>
                                                            </ul>
                                                    </li>



                                            </ul>
                                            <form className="d-flex">
                                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                            </form>
                                            <ul className="navbar-nav  mb-2 mb-md-0  justify-content-end">



                                                    <li>
                                                            <a className="nav-link px-2 link-dark" href="/login">
                                                                   <span className="material-icons">
                                                                    login
                                                                    </span> Login</a>
                                                    </li>
                                                            <li>
                                                              <a className="nav-link px-2 link-dark" href="/register">
                                                              <i className="fas fa-user" aria-hidden="true"></i> Register</a></li>
                                          </ul>
                                    </div>
                            </div>
                    </nav>
  )

}

export default Navbar;
