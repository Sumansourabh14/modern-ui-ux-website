import React from 'react';
import { heroContent } from '../constants/index';
import Button from './Button';

function Hero() {
    return (
        <section id='home' className='text-white flex flex-col text-center justify-center sm:justify-between items-center sm:flex-row sm:text-left py-20 sm:py-[100px]'>
            <div className='mb-10 sm:mb-0 max-w-[600px]'>
                <h1 className='font-outfit text-6xl lg:text-7xl xl:text-8xl font-bold mb-5 capitalize tracking-[0.02em] leading-snug'>{heroContent.title}</h1>
                <p className='mb-5'>{heroContent.body}</p>
                <div className='flex justify-between items-center w-[330px] mx-auto sm:mx-0'>
                    <Button buttonText={heroContent.buttonText1} />
                    <Button buttonText={heroContent.buttonText2} customClasses="bg-transparent border-2 border-secondary" />
                </div>
            </div>
            <img className='w-[311px] h-[331px] xl:w-[411px] xl:h-[431px]' src={heroContent.image} alt={heroContent.title} />
        </section>
    )
}

export default Hero;