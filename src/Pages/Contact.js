import React, { useRef } from 'react';
import '../Styles/Contact.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yue36za', 'template_6ddebja', form.current, 'user_e3xioD9DxjxuKMVKwRYSc')
      .then(res => {
        console.log(res);
      }) .catch(err => console.log(err));
      e.target.reset();
      }
        
      
  return (
    <div>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" id='button'/>
    </form>
    </div>
  );
};

export default Contact;