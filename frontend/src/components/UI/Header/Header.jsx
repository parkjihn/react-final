import React from 'react'
import headerLogo from '../../assets/Header/header-logo.jpg';
import headerCart from '../../assets/Header/header-cart.jpg';
import { Link } from "react-router-dom"
import headerStyle from './Header.module.css'

const Header = () => {
  return (
   <>
      <section className={headerStyle.siteNavbar}>
      <section className={headerStyle.navbarLogo}>
        <img src={headerLogo} alt="" />
      </section>

      <ul className={headerStyle.navbarLinks}>
        <Link to={'/'}>
          <li>Main Page</li>
        </Link>

        <Link to={'/categories/all'}>
          <li>Categories</li>
        </Link>

        <Link to={'products/all'}>
          <li>All products</li>
        </Link>

        <Link to={'/products/sales'}>
          <li>All sales</li>
        </Link>
      </ul>

      <section className={headerStyle.navbarCartIcon}>
        <Link to={'/cart'}>
        <img src={headerCart} alt="" />
        </Link>
        
      </section>
    </section>
   </>
  )
}

export default Header;
