import React from 'react';
import { getApp } from '../constants';
import Button from './Button';

function GetApp() {
    return (
        <section className='py-20 text-white flex flex-col items-center sm:flex-row sm:justify-between'>

            <div className='mb-10 sm:mb-0 max-w-[600px]'>
                <p className='uppercase font-semibold mb-5'>{getApp.subtitle}</p>
                <h1 className='font-outfit text-6xl font-bold mb-5'>{getApp.title}</h1>
                <p className='mb-5'>{getApp.body}</p>
                <div className=''>
                    <Button buttonText={getApp.buttonText} />
                </div>
            </div>

            <img className='w-[350px] h-[350px] md:w-[450px] md:h-[450px]' src={getApp.image} />

        </section>
    )
}

export default GetApp;