import React, { useState } from 'react';
import './Styles/style.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    errorMessage: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setFormStatus({ submitted: true, success: false, errorMessage: 'Invalid email address' });
      console.log('Invalid email address');
      return;
    }

    try {
      const response = await fetch('https://pseudo-server.onrender.com/portfolioForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Response: ',response)

      if (response.ok) {
        setFormStatus({ submitted: true, success: true, errorMessage: '' });
        console.log('Form submitted successfully!')
      } else {
        setFormStatus({ submitted: true, success: false, errorMessage: 'There was an error submitting the form.' });
        console.log('There was an error submitting the form.')
      }
    } catch (error) {
      setFormStatus({ submitted: true, success: false, errorMessage: 'There was an error submitting the form.' });
      console.log('There was an error submitting the form.', error)
    }
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-5xl font-bold sm:text-5xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#5de0e6] to-[#004aad]">
            Let's Collaborate!
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-[#fffff0] md:text-lg">
            Share your project ideas or inquiries with me, and let's work together to create something amazing! Your message is important to me, and I'll respond as soon as possible.
          </p>
        </div>

        <form className="mx-auto mb-2 grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="mb-2 inline-block text-sm text-[#46c1fe] sm:text-base">
              First name
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded border bg-[#232323] px-3 py-2 text-[#fffff0] outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 inline-block text-sm text-[#46c1fe] sm:text-base">
              Last name
            </label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded border bg-[#232323] px-3 py-2 text-[#fffff0] outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="mb-2 inline-block text-sm text-[#46c1fe] sm:text-base">
              Company
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded border bg-[#232323] px-3 py-2 text-[#fffff0] outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="mb-2 inline-block text-sm text-[#46c1fe] sm:text-base">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded border bg-[#232323] px-3 py-2 text-[#fffff0] outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="mb-2 inline-block text-sm text-[#46c1fe] sm:text-base">
              Phone
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded border bg-[#232323] px-3 py-2 text-[#fffff0] outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="mb-2 inline-block text-sm text-[#46c1fe] sm:text-base">
              Subject
            </label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded border bg-[#232323] px-3 py-2 text-[#fffff0] outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-2 inline-block text-sm text-[#46c1fe] sm:text-base">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-64 w-full rounded border bg-[#232323] px-3 py-2 text-[#fffff0] outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></textarea>
          </div>
          <div className="flex items-center justify-between sm:col-span-2">
            <button
              type="submit"
              className="mx-auto px-32 text-center inline-flex items-center justify-center w-full py-3 mb-2 text-lg text-white bg-gray-900 rounded-2xl sm:w-auto sm:mb-0 hover:bg-[#46c1fe] hover:text-[#141414] focus:ring focus:ring-[#46c1fe] focus:ring-opacity-80 transition"
            >
              Send
            </button>
          </div>
        </form>

        {formStatus.submitted && (
          <div
            className={`form-status ${
              formStatus.success ? 'form-status-success' : 'form-status-error'
            }`}
            role="alert"
          >
            {formStatus.success ? 'Form submitted successfully!' : formStatus.errorMessage}
          </div>
        )}

      </div>
    </div>
  );
};

export default ContactForm;
