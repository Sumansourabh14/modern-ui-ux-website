import React from 'react';
import { testimonials } from '../constants';

function Testimonials() {
    return (
        <section className='text-white text-center py-20'>
            <p className='uppercase font-semibold mb-5 opacity-80'>{testimonials.subtitle}</p>
            <h2 className='font-outfit text-6xl font-bold mb-14 capitalize'>{testimonials.title}</h2>

            <ul className='grid grid-cols-1 md:grid-cols-3 mt-32'>
                {testimonials.content.map((testimonial, index) => (
                    <li 
                        key={testimonial.id} 
                        className={`bg-secondary hover:bg-opacity-60 duration-200 hover:scale-105 shadow-xl relative bg-opacity-30 py-6 px-10 rounded-xl mb-20 md:mb-0 md:mr-6`}
                    >
                        <img 
                            src={testimonial.img} 
                            className="mx-auto w-[125px] h-[125px] rounded-full absolute left-0 right-0 -top-16"
                            alt={testimonial.name} 
                        />
                        <h3 className='uppercase font-semibold my-5 mt-16'>{testimonial.name}</h3>
                        <p className='text-sm max-w-[500px] mx-auto'>"{testimonial.quote}"</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Testimonials;