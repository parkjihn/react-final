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
       <>
       </>
    );
};

export default OrderForm;
