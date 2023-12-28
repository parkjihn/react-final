
import React from 'react';
import bannerImage from "../../assets/Homepage/Banner/homepage-banner.jpg";
import styles from './HomePage.module.css'; 
import CategoryRow from '../../UI/CategoryRow/CategoryRow';
import { Link } from "react-router-dom"



const HomePage = () => {

  return (
    <>
      
  <section style={{ backgroundImage: `url(${bannerImage})` }} className={styles.banner}>
        <section className="banner-text-button">
          <h2 className={styles.text}>Amazing Discounts on Garden Products!</h2>
          <Link to={'/products/sales'}>
          <button className={styles.button}>Check out</button>
          </Link>
        </section>
      </section>

     
    </>
  )
}

export default HomePage;
