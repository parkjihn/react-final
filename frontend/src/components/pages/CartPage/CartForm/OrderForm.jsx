import React, { useState } from 'react';
import styles from './OrderForm.module.css'; 

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
     
        console.log(formData);
    };

    return (
        <div className={styles.orderForm}>
            <div className={styles.orderDetails}>
                <h2>Order details</h2>
                <p>4 items</p>
                <h1>Total $541,00</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={styles.inputField}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className={styles.inputField}
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={styles.inputField}
                />
                <button type="submit" className={styles.submitButton}>Order</button>
            </form>
        </div>
    );
};

export default OrderForm;
