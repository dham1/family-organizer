import React, { useState } from 'react'
import img from "../../assets/plantify-life.png";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import emailjs from 'emailjs-com';
import { ContactContainer, ContactTitle, ButtonsContainer, ContactInfo, ContactInfoContainer } from './contact-details.styles';

import EmailKey from '../../emailkey';


const ContactDetails = () => {


    const [requestDetails, setRequestDetails] = useState({
        email: '',
        message: '',
        orderNumber: '',
        name: ''
    });

    const { email, message, orderNumber, name } = requestDetails;


    const handleSubmit = async e => {
        e.preventDefault();
        emailjs.sendForm(`service_9rj21ne`, EmailKey.CONTACT_TEMPLATE_ID, e.target, EmailKey.USER_ID)
            .then((result) => {
                alert("Message Sent, We will get back to you shortly", result.text);
            },
                (error) => {
                    alert("An error occurred, Please try again", error.text);
                });

    };

    const handleChange = event => {
        const { value, name } = event.target;

        setRequestDetails({ ...requestDetails, [name]: value });
    };
    return (
        <>
            <ContactContainer>
                <ContactTitle>Contact us or request a refund</ContactTitle>
                <span>Send a message to us and add your order number in case of refund</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='name'
                        type='text'
                        handleChange={handleChange}
                        value={name}
                        label='Name'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={handleChange}
                        value={email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='message'
                        type='text'
                        value={message}
                        handleChange={handleChange}
                        label='Message'
                        required
                    />
                    <FormInput
                        name='orderNumber'
                        type='text'
                        handleChange={handleChange}
                        value={orderNumber}
                        label='Order number'
                    />
                    <ButtonsContainer>
                        <CustomButton type='submit'> Send a message </CustomButton>
                    </ButtonsContainer>
                </form>
            </ContactContainer>

            <ContactInfoContainer>
                <ContactInfo>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    <a href="tel:0000123123123">0000 123 123 123</a>
                </ContactInfo>

                <br />
                <ContactInfo>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                    </svg>
                    <a href="mailto: plantifylife@plantify.com">plantifylife@plantify.com</a>
                </ContactInfo>

                <br />
                <img src={img} width="200" height="200" alt="Logo" />
            </ContactInfoContainer>

        </>
    )

}



export default ContactDetails;