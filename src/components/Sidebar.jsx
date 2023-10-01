import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onValueClick, filter }) => {
    const page = window.location.pathname
    // console.log(typeof (page.slice(1)));
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
                {
                    !filter ? (
                        list.map((ele) => (
                            <li key={ele.value} className='sidebar__list-item'>
                                <div className='sidebar__list-item-wrapper'>
                                    <img src={ele.icon} alt={ele.value} />
                                    <p className='item-text'>{ele.name}</p>
                                </div>
                                <img
                                    onClick={() => onValueClick(ele)}
                                    src="/plus.svg"
                                    className='item-pic pointer'
                                    alt="plus"
                                />
                            </li>
                        ))
                    ) : (
                        <>
                            <div className='sidebar__list-item '>
                                <div className='sidebar__list-item-wrapper'>
                                    <img src={`${page}.svg`} alt='company' />
                                    <p className='item-text'>{page.slice(1)}</p>
                                </div>
                            </div>
                            <div className='sidebar__additional-info flex-bt'>
                                <p>information technology services</p>
                                <p>IT consulting</p>
                            </div>
                        </>
                    )
                }

            </ul>
        </div>
    )
}

export default Sidebar
