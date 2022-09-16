import React from 'react';
import { getApp } from '../constants';
import Button from './Button';

function GetApp() {
    return (
        <section id='download' className='py-20 text-white flex flex-col items-center sm:flex-row sm:justify-between'>

            <div className='mb-10 sm:mb-0 max-w-[600px] text-center sm:text-left'>
                <p className='uppercase font-semibold mb-5 opacity-80'>{getApp.subtitle}</p>
                <h1 className='font-outfit text-6xl font-bold mb-5 capitalize'>{getApp.title}</h1>
                <p className='mb-5'>{getApp.body}</p>
                <div>
                    <Button buttonText={getApp.buttonText} />
                </div>
            </div>

            <img 
                className='w-[350px] h-[350px] md:w-[450px] md:h-[450px]' 
                src={getApp.image} 
                alt={getApp.title}    
            />

        </section>
    )
}

export default GetApp;