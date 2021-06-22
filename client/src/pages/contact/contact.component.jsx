import React from 'react';
import ContactDetails from '../../components/contact-details/contact-details.component';
import { ContactPageContainer } from './contact.styles';

const ContactPage = () => (
    <ContactPageContainer>
        <ContactDetails />
    </ContactPageContainer>
);

export default ContactPage;