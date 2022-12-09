import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {

    const navigation=useNavigate();
    const [search, setSearch] = React.useState('');
    function hideNav(){
        const nav=document.getElementById('navbarNav');
        nav.classList.remove('show');
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid ">
        <div className="nav-container">

        <Link  onClick={()=>hideNav()}  className="navbar-brand col-lg-4" to={'.'} ><img width={60} height={60} src="./favicon.png" /></Link>
        <form className="d-flex navbar-search" onSubmit={(e)=>{e.preventDefault(); navigation(`/search/${search}`)}} >
            <input className="form-control me-lg-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            <button className="btn btn-dark d-none d-lg-block" onClick={()=>navigation(`/search/${search}`)} >Search</button>
            <button className="btn btn-dark d-lg-none " onClick={()=>navigation(`/search/${search}`)} ><i className="bi bi-search"></i></button>
        </form>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav col-12">
                    <li>
                    <Link  onClick={()=>hideNav()}  to='/'>
                        Home
                    </Link>

                    </li>
                    <li>
                <Link  onClick={()=>hideNav()}  to='/store'>
                    Store
                </Link>
                </li><li>
                    <a href='https://blissbookstore.shiprocket.co/'>
                        Track
                    </a>
                </li>
                <li>
                <Link  onClick={()=>hideNav()}  to='/about'>
                    About
                </Link>
                </li>
                
                <li>
                <Link  onClick={()=>hideNav()}  to='/contact-us' >
                    Contact
                </Link>
                </li>
                
               
                
                <li>
                <Link  onClick={()=>hideNav()}  to='/cart'>
                    Cart
                </Link>
                </li>
                
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar;
/*
<nav className="navbar">
    <div className="container">
        <div className='navbar-image col-12 col-sm-2 col-md-6 col-lg-4 mb-2 mb-sm-0'>
            <img width={60} height={60} src="https://blissbookstore.com/wp-content/uploads/2022/06/photo_2022-06-09_00-03-38-100x100.jpg"/>
        </div>
        <div className='navbar-second col-12 col-sm-10 col-md-6 col-lg-8 row'>
            <div className='navbar-search col-12 col-lg-4'>
                <input placeholder='Search...'/>
                <button>Search</button>
            </div>
            <div className="col-12 col-lg-8">
                <ul className='navbar-list col-12'>
                    <Link  onClick={()=>hideNav()}  to='/'>
                    <li>
                        Home
                    </li>
                    </Link>
                    <Link  onClick={()=>hideNav()}  to='/about'>
                    <li>About</li>
                    </Link>
                    <Link  onClick={()=>hideNav()}  to='/contact-us'>
                    <li>Contact</li>
                    </Link>
                    <Link  onClick={()=>hideNav()}  to='/store'>
                    <li>Store</li>
                    </Link>
                    <Link  onClick={()=>hideNav()}  to='/cart'>
                    <li>Cart</li>
                    </Link>
                    <Link  onClick={()=>hideNav()}  to='/account'>
                    <li>Account</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
    </nav>
    */