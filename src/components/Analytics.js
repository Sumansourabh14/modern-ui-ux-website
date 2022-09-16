import React from 'react';
import { analytics } from '../constants';
import Button from './Button';

function Analytics() {
    return (
        <section id='pricing' className='py-20 text-white flex flex-col items-center sm:flex-row-reverse sm:justify-between'>

            <div className='mb-10 sm:mb-0 max-w-[600px] text-center sm:text-left'>
                <p className='uppercase font-semibold mb-5 tracking-wide opacity-80'>{analytics.subtitle}</p>
                <h1 className='font-outfit text-6xl font-bold mb-5 capitalize'>{analytics.title}</h1>
                <p className='mb-5'>{analytics.body}</p>
                <div className=''>
                    <Button buttonText={analytics.buttonText} />
                </div>
            </div>

            <img className='w-[350px] h-[350px] md:w-[450px] md:h-[450px]' src={analytics.image} alt={analytics.title} />

        </section>
    )
}

export default Analytics;