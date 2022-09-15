import React from 'react';
import { cta } from '../constants/index'
import Button from './Button';

function CTA() {
    return (
        <section className='text-white py-24 text-center'>
            <div className='bg-secondary bg-opacity-60 p-14 rounded-2xl'>
                <p className='text-black mb-5 uppercase font-semibold'>{cta.subtitle}</p>
                <h2 className='text-bold font-outfit text-6xl font-bold mb-10 max-w-[500px] mx-auto'>{cta.title}</h2>
                <Button
                    buttonText={cta.buttonText}
                    customClasses="bg-black px-14"
                />
            </div>
        </section>
    )
}

export default CTA;