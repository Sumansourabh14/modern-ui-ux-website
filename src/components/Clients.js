import React from 'react';
import { clientsContent } from '../constants/index';

function Clients() {
    return (
        <section>
            <h3 className='uppercase font-semibold text-white mb-4'>Featured on</h3>
            <ul className='bg-secondary py-4 grid grid-cols-2 justify-between items-center sm:flex'>
                {clientsContent.map(client => {
                    return (
                        <div>
                            <img src={client.image} />
                        </div>
                    )
                })}
            </ul>
        </section>
    )
}

export default Clients;