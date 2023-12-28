
import React from 'react';
import bannerImage from "../../assets/Homepage/Banner/homepage-banner.jpg";
import discountImage from "../../assets/Homepage/InputForm/homepage-form.jpg";
import { useForm } from 'react-hook-form';

import '../../UI/CategoriesItem/CategoriesItem'; // You may need to import this if not already done
import styles from './HomePage.module.css'; // Import the CSS module

const HomePage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



  return (
    <>
      <section style={{ backgroundImage: `url(${bannerImage})` }} className={styles.banner}>
        <section className="banner-text-button">
          <h2 className={styles.text}>Amazing Discounts on Garden Products!</h2>
          <button className={styles.button}>Check out</button>
        </section>
      </section>

   

      {/* <section className="discount-form">
      <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
          <input style={inputStyle} {...register("name", { required: true })} placeholder="Name" />
          {errors.name && <span>Name is required</span>}
          
          <input style={inputStyle} {...register("phone", { required: true })} placeholder="Phone number" />
          {errors.phone && <span>Phone number is required</span>}
          
          <input style={inputStyle} {...register("email", { required: true })} placeholder="Email" />
          {errors.email && <span>Email is required</span>}
          
          <button style={buttonStyle} type="submit">Get a discount</button>
        </form>

      </section> */}
      
  
    </>
  )
}

export default HomePage;
