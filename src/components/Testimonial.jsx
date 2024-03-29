import React from 'react';

const testimonials = [
  {
    quote:
      "Aditya's technical expertise and dedication to our project resulted in a successful product launch. His ability to communicate effectively and manage deadlines was impressive.",
    author: 'Sunil, DetaSys',
  },
  {
    quote:
      "We're thrilled with the work Aditya did on Netsepio's web app and Chrome Extension. His attention to detail and focus on delivering the best possible user experience made a significant impact on our project.",
    author: 'Sachindra, Lazarous Network',
  },
  {
    quote:
      'Aditya consistently exceeded our expectations, delivering high-quality work on time and within budget. His problem-solving skills and professionalism made him an invaluable asset to our team.',
    author: 'Stacy, Frec.Io',
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-5xl font-bold sm:text-5xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#5de0e6] to-[#004aad]">
            Testimonials
          </h2>
          <p className="mt-4 text-xl text-[#fffff0]">
            Hear what clients have to say about working with me
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ quote, author }, index) => (
            <div key={index} className="block rounded-xl p-8 shadow-xl transition hover:border-[#46c1fe]/30 hover:shadow-[#46c1fe]/80">
              <p className="italic text-sm text-[#fffff0]">"{quote}"</p>
              <p className="mt-5 font-bold text-[#46c1fe]">- {author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;