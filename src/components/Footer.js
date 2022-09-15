import React from 'react';
import { footerContent } from '../constants';
import Button from './Button';

function Footer() {
    return (
        <footer className='text-white py-10'>
            <div className='flex flex-row flex-wrap justify-between border-t border-secondary pt-8'>
                <h3 className='mr-10 font-bold uppercase font-outfit'>Krypto</h3>
                
                <div className='flex items-start justify-between'>
                    {footerContent.map((item, index) => {
                        return (
                            <div className="mx-4">
                                <h4 className='font-semibold font-outfit mb-5'>{item.title}</h4>
                                <ul>
                                    {item.list.map((innerItem, index) => {
                                        return (
                                            <li key={innerItem.name}>
                                                <a href={innerItem.link}>{innerItem.name}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <div className='mx-auto md:mx-0 my-10 md:my-0'>
                    <h3 className='font-bold font-outfit text-xl mb-5'>Join Our Newsletter</h3>
                    <input 
                        placeholder='Email Address' 
                        className='py-2 px-4 font-outfit bg-secondary bg-opacity-60 text-gray-200 outline-none rounded-full' 
                    />
                    <Button 
                        buttonText="submit" 
                        customClasses="py-2" 
                    />
                </div>
            </div>

            <div className='text-center pt-10'>
                <p>© 2022 Krypto</p>
                <p>Designed and built by Suman Sourabh</p>
            </div>

        </footer>
    )
}

export default Footer;