import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onValueClick }) => {

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
    return (
        <div className='sidebar container'>
            <div className='sidebar__header flex-bt sidebar__header-text'>
                <h3 className='sidebar__title'>Filters</h3>
                <div className='sidebar__buttton pointer'>
                    <p className='sidebar__button btn-text'><img className='sidebar__button-icon' src="/plus.svg" alt="" />Add</p>
                </div>
            </div>
            <p className='sidebar__section-title'>Recently Used</p>
            <ul className='sidebar__list'>
                {list.map((ele) => (
                    <li key={ele.value} className='sidebar__list-item'>
                        <div className='sidebar__list-item-wrapper'>
                            <img src={ele.icon} alt={ele.value} />
                            <p className='item-text'>{ele.name}</p>
                        </div>
                        <img onClick={() => onValueClick(ele)} src="/plus.svg" className='item-pic pointer' alt="plus" />

                    </li>

                ))}

            </ul>
        </div>
    )
}

export default Sidebar
