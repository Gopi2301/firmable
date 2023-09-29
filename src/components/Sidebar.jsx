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
                <div className='sidebar__buttton'>
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
                        <img onClick={() => onValueClick(ele)} src="/plus.svg" className='item-pic' alt="plus" />

                    </li>

                ))}
                {/* <li className='sidebar__list-item'>
                    <img src="/person.svg" alt="person" />
                    <p className='item-text'>Person Name</p></li>
                <li className='sidebar__list-item'>
                    <img src="/company.svg" alt="company" /> <p className='item-text'>Company Name</p></li>
                <li className='sidebar__list-item'>
                    <img src="/industry.svg" alt="" />
                    <p className='item-text'>Industry</p></li>
                <li className='sidebar__list-item'>
                    <img src="/location.svg" alt="" />
                    <p className='item-text'>Location</p></li>
                <li className='sidebar__list-item'>
                    <img src="/seniority.svg" alt="" />
                    <p className='item-text'>Seniority</p></li>
                <li className='sidebar__list-item'>
                    <img src="/position.svg" alt="" />
                    <p className='item-text'>Position Title</p></li>
                <li className='sidebar__list-item'>
                    <img src="/department.svg" alt="" />
                    <p className='item-text'> Department</p></li>
                <li className='sidebar__list-item'>
                    <img src="/people.svg" alt="" />
                    <p className='item-text'>People with</p></li> */}
            </ul>
        </div>
    )
}

export default Sidebar
