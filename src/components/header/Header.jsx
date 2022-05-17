import React, { useRef, useEffect } from 'react'
import './header.scss'

import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const headerLinks = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Movies',
            path: '/movie'
        },
        {
            title: 'TV series',
            path: '/tv'
        },
    ]
    const { pathLocation } = useLocation()
    const headerRef = useRef()
    const active = headerLinks.findIndex(e => e.path === pathLocation)

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')

            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader)
        };
    }, [])


    return (
        <div ref={headerRef} className='header'>
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to='/' >Movies</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerLinks.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>{e.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default Header