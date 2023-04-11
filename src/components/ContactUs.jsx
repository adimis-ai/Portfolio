import React, { useState } from 'react';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://pseudo-server.onrender.com/portfolioForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('There was an error submitting the form.');
      }
    } catch (error) {
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div id="Contact" className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-5xl font-bold sm:text-5xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-black via-teal-700 to-black">
            Let's Collaborate!
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-900 md:text-lg">
            Share your project ideas or inquiries with me, and let's work together to create something amazing! Your message is important to me, and I'll respond as soon as possible.
          </p>
        </div>

        <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              First name
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Last name
            </label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
              Company
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
Email
</label>
<input
           name="email"
           value={formData.email}
           onChange={handleChange}
           className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
         />
</div>
<div className="sm:col-span-2">
<label htmlFor="phone" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
Phone
</label>
<input
           name="phone"
           value={formData.phone}
           onChange={handleChange}
           className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
         />
</div>
<div className="sm:col-span-2">
<label htmlFor="subject" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
Subject
</label>
<input
           name="subject"
           value={formData.subject}
           onChange={handleChange}
           className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
         />
</div>
<div className="sm:col-span-2">
<label htmlFor="message" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
Message
</label>
<textarea
           name="message"
           value={formData.message}
           onChange={handleChange}
           className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
         ></textarea>
</div>
<div className="flex items-center justify-between sm:col-span-2">
        <button
          type="submit"
          className="inline-block mx-auto rounded-lg bg-black px-32 py-3 text-center inline-flex items-center justify-center w-full py-3 mb-2 text-lg text-white bg-gray-900 rounded-2xl sm:w-auto sm:mb-0 hover:bg-teal-900 focus:ring focus:ring-teal-900 focus:ring-opacity-80 transition"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</div>
);
};

export default ContactForm;
