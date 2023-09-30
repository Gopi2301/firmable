import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Tables from '../components/table'
import { useParams } from 'react-router-dom'

const FilterPage = () => {
    const handleValueClick = () => { }
    const [filter, setFilter] = useState(false)
    useEffect(() => {
        // Check if the current URL is '/filter'
        if (window.location.pathname === '/filter') {
            setFilter(true); // Set filter to true if the URL is '/filter'
        } else {
            setFilter(false); // Set filter to false for other URLs
        }
    }, []);
    return (
        <>
            <Navbar className='navbar' />
            <div className='display-container container'>
                <Sidebar onValueClick={handleValueClick} filter={filter} setFilter={setFilter} />
                <div className='main-content'>
                    <div className='headbar flex-bt headbar-txt padding-sm-lg'>
                        <div className='filters flex'>

                            <div className='filters__item flex-sm '>
                                <img src='/company.svg' alt='company' className='filters__icon' />
                                <p className='filters__value pointer'>Company</p>
                            </div>

                        </div>
                        <div className='controls flex'>
                            <div className='controls__item flex-sm padding-sm border-clr pointer'>
                                <img src="/star.svg" alt="starred" className='controls__icon' />
                                <p className='controls__text '>Starred Search</p>
                            </div>
                            <div className='controls__item flex padding-sm border-clr '>
                                <img src="/recent.svg" alt="recent" className='controls__icon' />
                                <p className='controls__text pointer'>Recent Search</p>
                            </div>

                            <div className='controls__item flex '>
                                <img src="/download.svg" alt="" className='controls__icon padding-sm border-clr pointer' />
                            </div>
                            <div className='controls__item padding-sm border-clr flex-bt'>
                                <img src="/vertical.svg" alt="" className='controls__icon pointer' />
                                <img src="/horizontal.svg" alt="" className='controls__icon pointer' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Tables />
                    </div>
                </div>
            </div >
        </>
    )
}

export default FilterPage
