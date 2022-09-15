import React from 'react';
import { clientsContent } from '../constants/index';

function Clients() {
    return (
        <section className='py-10'>
            <h3 className='uppercase font-semibold text-white mb-4'>Featured on</h3>
            <ul className='bg-secondary bg-opacity-20 py-4 px-8 grid grid-cols-2 justify-between items-center sm:flex rounded-2xl'>
                {clientsContent.map(client => {
                    return (
                        <div className='opacity-90'>
                            <img src={client.image} />
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}

export default Clients;