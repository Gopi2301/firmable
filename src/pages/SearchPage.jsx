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

    return (
        <>
            <Navbar />
            <div className='display-container'>
                <Sidebar list={list} setSelect={setSelect} />
                <div className='main-content'>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage
