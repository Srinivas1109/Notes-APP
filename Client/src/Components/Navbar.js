import React, { useContext } from 'react'
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom'
import SearchContext from '../Context/Search'

const Navbar = () => {
    const {searchValue, setSearchValue} = useContext(SearchContext)
    const handleOnChange = (e)=>{
        setSearchValue(e.target.value)
    }
    return (
        <div>
            <header>
                <nav>
                    <ul className='nav-items'>
                        <li className="nav-item"><Link to="/all-notes" className='nav-item-link nav-title'>Notes</Link></li>
                        <li className="nav-item"><Link to="/about" className='nav-item-link'>About</Link></li>
                        <li className="nav-item"><Link to="/contact" className='nav-item-link'>Contact</Link></li>
                        <li className="nav-item"><Link to="/login" className='nav-item-link'>Login</Link></li>
                        <li className="nav-item"><Link to="/sign-up" className='nav-item-link'>Sign Up</Link></li>
                        <div className="input-search">
                            <input type="text" name="nav-search" placeholder='Search notes here...' className='nav-search' value={searchValue} onChange={handleOnChange}/>
                            <button className='nav-search-btn' >Search</button>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar