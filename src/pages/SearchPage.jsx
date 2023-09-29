import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const SearchPage = () => {

    const [select, setSelect] = useState([]);

    const handleValueClick = (value) => {
        if (!select.includes(value)) {
            const uniqueSet = new Set(select);
            uniqueSet.add(value);
            setSelect(Array.from(uniqueSet));
        }
        if (select.length === 2) {
            const newSelect = select.slice(1);
            setSelect([...newSelect, value]);
        } else {
            setSelect([...select, value]);
        }
    };
    console.log(select)
    return (
        <>
            <Navbar className='navbar' />
            <div className='display-container container'>
                <Sidebar onValueClick={handleValueClick} />
                <div className='main-content'>
                    <div className='headbar flex-bt headbar-txt padding-sm-lg'>
                        <div className='filters flex'>
                            {select.map((ele) => (
                                <div key={ele.value} className='filters__item flex-sm'>
                                    <img src={ele.icon} alt={ele.name} className='filters__icon' />
                                    <p className='filters__value'>{ele.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className='controls flex'>
                            <div className='controls__item flex-sm padding-sm border-clr'>
                                <img src="/star.svg" alt="starred" className='controls__icon' />
                                <p className='controls__text'>Starred Search</p>
                            </div>
                            <div className='controls__item flex padding-sm border-clr'>
                                <img src="/recent.svg" alt="recent" className='controls__icon' />
                                <p className='controls__text'>Recent Search</p>
                            </div>

                            <div className='controls__item flex '>
                                <img src="/download.svg" alt="" className='controls__icon padding-sm border-clr' />
                            </div>
                            <div className='controls__item padding-sm border-clr flex-bt'>
                                <img src="/vertical.svg" alt="" className='controls__icon' />
                                <img src="/horizontal.svg" alt="" className='controls__icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SearchPage
