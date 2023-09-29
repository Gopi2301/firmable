import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const SearchPage = () => {
    const list = [
        {
            name: 'person name',
            icon: '/person.svg',
            value: 'person'
        },
        {
            name: 'company name',
            icon: '/company.svg',
            value: 'company',
        },
        {
            name: 'location',
            icon: '/location.svg',
            value: 'location',
        },
        {
            name: 'seniority',
            icon: '/seniority.svg',
            value: 'seniority',
        },
        {
            name: 'position',
            icon: 'position.svg',
            value: 'position',
        },
        {
            name: 'department',
            icon: '/department.svg',
            value: 'department',
        },
        {
            name: 'people with',
            icon: '/people.svg',
            value: 'people',
        },
    ]
    const [select, setSelect] = useState([]);
    const [valueToAdd, setValueToAdd] = useState('');

    // const sample = [
    //     {
    //         name: 'company name',
    //         icon: '/company.svg',
    //         value: 'company',
    //     },
    //     {
    //         name: 'people with',
    //         icon: '/people.svg',
    //         value: 'people',
    //     }
    // ]
    return (
        <>
            <Navbar className='navbar' />
            <div className='display-container container'>
                <Sidebar list={list} className='sidebar' />
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
