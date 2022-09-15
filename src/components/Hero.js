import React from 'react';
import { heroContent } from '../constants/index';
import Button from './Button';

function Hero() {
    return (
        <section className='text-white flex flex-col text-center justify-center sm:justify-between items-center sm:flex-row sm:text-left py-6 sm:py-[120px]'>
            <div className='mb-10 sm:mb-0 max-w-[600px]'>
                <h1 className='font-outfit text-6xl md:text-7xl font-bold mb-5'>{heroContent.title}</h1>
                <p className='mb-5'>{heroContent.body}</p>
                <div className=''>
                    <Button buttonText={heroContent.buttonText1} />
                    <Button buttonText={heroContent.buttonText2} />
                </div>
            </div>
            <img className='w-[311px] h-[331px]' src={heroContent.image} />
        </section>
    )
}

export default Hero;