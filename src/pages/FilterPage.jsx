import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const FilterPage = () => {
    const handleValueClick = () => { }
    return (
        <>
            <Navbar />
            <div className='display-container container'>
                <Sidebar onValueClick={handleValueClick} />
                <div className='main-content'>
                    <div className='headbar flex-bt headbar-txt padding-sm-lg'>
                        <div className='filters flex'>
                            {select.map((ele) => (
                                <div key={ele.value} className='filters__item flex-sm '>
                                    <img src={ele.icon} alt={ele.name} className='filters__icon' />
                                    <p className='filters__value pointer'>{ele.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterPage
