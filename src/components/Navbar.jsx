import React, { useState } from 'react'

const Navbar = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('Search');
    const handleMenuItemClick = (li) => {
        setActiveMenuItem(li)
    }
    return (
        <>
            <nav className='navbar container'>
                <div className='navbar__section navbar__section--left flex-nav'>
                    <div className='navbar__logo-wrapper'>
                        <img src="/logo.svg" className='navbar__logo flex' alt="" />
                    </div>
                    <ul className='navbar__menu'>
                        <li className={`navbar__menu-item ${activeMenuItem === 'Home' ? 'active' : ''} flex`} onClick={() => handleMenuItemClick('Home')}>
                            <img src={activeMenuItem === 'Home' ? '/homeactive.svg' : '/home.svg'} alt="home" />
                            <p className='navbar__menu-text fs-nav'>Home</p>
                        </li>
                        <li className={`navbar__menu-item ${activeMenuItem === 'Search' ? 'active' : ''} flex`} onClick={() => handleMenuItemClick('Search')}>
                            <img src={activeMenuItem === 'Search' ? '/searchactive.svg' : '/search.svg'} alt="search" />
                            <p className='navbar__menu-text'>Search</p>
                        </li>
                        <li className={`navbar__menu-item ${activeMenuItem === 'List' ? 'active' : ''} flex`} onClick={() => handleMenuItemClick('List')}>
                            <img src={activeMenuItem === 'List' ? '/listactive.svg' : '/list.svg'} alt="" />
                            <p className='navbar__menu-text'>List</p>
                        </li>
                    </ul>
                </div>
                <div className='navbar__section navbar__section--right flex-lt '>
                    <div className='navbar__input-wrapper'>
                        <input type="text" name="" id="" className='navbar__input' label="Quick Look" />
                    </div>
                    <p className='navbar__item navbar__item--highlight profile'>NP</p>
                </div>
            </nav>
        </>
    )
}

export default Navbar
