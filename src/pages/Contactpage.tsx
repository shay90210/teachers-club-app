import { ContactForm } from "../components/ContactForm";

export const Contactpage = () => {
    return (
        <div className='contact-page'>
            <h3>CONTACT US</h3>
            <p>
                Need assistance or would like to give us a shout out? Submit the form, and we
                will contact you within the next 48-72 hours.
            </p>
            <ContactForm />
        </div>
    )
};