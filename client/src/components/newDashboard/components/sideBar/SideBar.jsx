import React, { useEffect, useState } from 'react'
import './sideBar.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { images } from '../../constants'
import sidebarNav from '../../configs/sidebarNav'

const SideBar = () => {
  const [activeIndex, setactiveIndex] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1]
    const activeItem = sidebarNav.findIndex(item => item.section === curPath)

    setactiveIndex(curPath.length === 0 ? 0 : activeItem)
  }, [location])

  const closeSidebar = () => {
    document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
    setTimeout(() => {
      document.body.classList.remove('sidebar-open')
      document.querySelector('.main__content').style = ''
    }, 500);
  }


  return (
    <div className='sidebar'>
      <div className="sidebar__logo">
        <img src={images.logo} alt="" />
        <div className="sidebar-close" onClick={closeSidebar}>
          <i className='bx bx-x'></i>
        </div>
      </div>
      <div className="sidebar__menu">
        {
          sidebarNav.map((nav, index) => {
            if (nav.text === 'Home') return (
              <a href="http://localhost:3000/" className={`sidebar__menu__item 
              ${activeIndex === index && 'active'} `} onClick={closeSidebar}>
                <div className="sidebar__menu__item__icon">
                  {nav.icon}
                </div>
                <div className="sidebar__menu__item__txt">
                  {nav.text}
                </div>
              </a>
            )
            else return (
              <NavLink to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item 
              ${activeIndex === index && 'active'} `} onClick={closeSidebar} >
                <div className="sidebar__menu__item__icon">
                  {nav.icon}
                </div>
                <div className="sidebar__menu__item__txt">
                  {nav.text}
                </div>

              </NavLink>
            )
          })

        }
        <div className="sidebar__menu__item">
          <div className="sidebar__menu__item__icon">
            <i className='bx bx-log-out'></i>
          </div>
          <div className="sidebar__menu__item__txt">
            Cerrar Sesion
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar