
import React from 'react';
import Navbar from "../UI/Header/Header";
import bannerImage from "../assets/Homepage/Banner/homepage-banner.jpg";
import discountImage from "../assets/Homepage/InputForm/homepage-form.jpg"
import { useForm } from 'react-hook-form';
import Footer from '../UI/Footer/Footer';
import CategoryRow from '../UI/CategoryRow/CategoryRow';

const HomePage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  const bannerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '700px', // Adjust as needed
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const textStyle = {
    color: 'white', // Assuming the text color should be white
    textAlign: 'left',
    fontSize: '70px', // Adjust as needed
    fontWeight: 'bold', // Adjust as needed
    
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50', // Adjust the color as needed
    border: 'none',
    color: 'white',
    padding: '14px 140px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px', // Adjust as needed
  };

  const formStyle = {
  
    padding: '20px',
    borderRadius: '10px',
    width: '400px', // Adjust as needed
    position: 'absolute',
    top: '50%', // Adjust as needed
    right: '40px',
    
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const discountStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '700px', // Adjust as needed
    backgroundImage: `url(${discountImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };


  return (
    <>
     

      <section style={bannerStyle} className="homepage-banner">
        <section style={{ position: 'absolute', bottom: '55%', left: '40px' }} className="banner-text-button">
          <h2 style={textStyle} className="banner-text">Amazing Discounts on Garden Products!</h2>
          <button style={buttonStyle} className="banner-button">
            Check out
          </button>
        </section>
      </section>

    <CategoryRow/>

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
