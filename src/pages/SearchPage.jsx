import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import Tables from '../components/table';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
    const navigate = useNavigate()
    const [select, setSelect] = useState([{
        name: 'company',
        icon: '/company.svg',
        value: 'company'
    }]);

    const handleValueClick = (value) => {
        if (!select.includes(value)) {
            if (select.length === 2) {
                const newSelect = select.slice(1);
                setSelect([...newSelect, value]);
            } else {
                setSelect([...select, value]);
            }
        }
        navigate(`/${value.value}`)
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
                                <div key={ele.value} className='filters__item flex-sm '>
                                    <img src={ele.icon} alt={ele.name} className='filters__icon' />
                                    <p className='filters__value pointer'>{ele.value}</p>
                                </div>
                            ))}
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

export default SearchPage
