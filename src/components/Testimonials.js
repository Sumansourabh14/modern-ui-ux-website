import React from 'react';
import { testimonials } from '../constants';

function Testimonials() {
    return (
        <section className='text-white text-center py-10'>
            <p className='uppercase font-semibold mb-5'>{testimonials.subtitle}</p>
            <h2 className='font-outfit text-6xl font-bold mb-14'>{testimonials.title}</h2>

            <ul className='grid grid-cols-1 md:grid-cols-3'>
                {testimonials.content.map((testimonial, index) => (
                    <li 
                        key={testimonial.id} 
                        className={`bg-secondary bg-opacity-30 p-6 rounded-xl mb-10 md:mb-0 ${index === testimonial.length - 1 ? "md:mr-0" : "md:mr-10"}`}
                    >
                        <img 
                            src={testimonial.img} 
                            className="mx-auto w-[125px] h-[125px] rounded-full bg-blend-luminosity"
                            alt={testimonial.name} 
                        />
                        <h3 className='uppercase font-semibold my-5'>{testimonial.name}</h3>
                        <p className='text-sm'>{testimonial.quote}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Testimonials;