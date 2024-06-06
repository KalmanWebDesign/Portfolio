import React, { useState } from 'react';
import './Contact.css';
import decoration from '../../assets/instructional-web-design-development-services-deco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [result, setResult] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setResult('Sending....');

        const response = await fetch('http://localhost:5000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            setResult('Form Submitted Successfully');
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        } else {
            console.log('Error', data);
            setResult(data.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        // Validate individual field and remove error if valid
        const newErrors = { ...errors };
        switch (name) {
            case 'name':
                if (value) {
                    delete newErrors.name;
                } else {
                    newErrors.name = 'Name is required';
                }
                break;
            case 'email':
                if (!value) {
                    newErrors.email = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    newErrors.email = 'Email address is invalid';
                } else {
                    delete newErrors.email;
                }
                break;
            case 'message':
                if (value) {
                    delete newErrors.message;
                } else {
                    newErrors.message = 'Message is required';
                }
                break;
            default:
                break;
        }
        setErrors(newErrors);
    };

    return (
        <div id='contact' className="contact">
            <div className="spacer"></div>
            <div className="contact-title">
                <h2>Reach Out</h2>
                <img src={decoration} alt="instructional designer and web developer decoration" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h2>Let's Talk</h2>
                    <p>Contact me about employment or projects</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faEnvelope} /> <p>kalmanwebdesign@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faPhone} /> <p>(210) 461-6058</p>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faLocationPin} /> <p>TX, USA</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <label htmlFor="email">Your Email</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <label htmlFor="message">Leave a message</label>
                    <textarea
                        name="message"
                        rows="8"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter a message"
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}
                    <button type="submit" className="contact-submit">Submit</button>
                    {result && <h2 className='formSuccess'>{result}</h2>}
                </form>
            </div>
        </div>
    );
}

export default Contact;