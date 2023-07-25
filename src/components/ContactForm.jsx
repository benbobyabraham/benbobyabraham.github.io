import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    emailjs.send('service_la6npah', 'your-email-template-id', formData, 'your-user-id')
      .then((response) => {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        setSubmitSuccess('Thank you for your message!');
      }, (error) => {
        setIsSubmitting(false);
        setSubmitError('An error occurred. Please try again later.');
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {submitError && <p>{submitError}</p>}
      {submitSuccess && <p>{submitSuccess}</p>}
    </form>
  );
}

export default ContactForm;
