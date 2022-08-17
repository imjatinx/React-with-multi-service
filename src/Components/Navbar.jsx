import React from 'react';
import { Link } from 'react-router-dom'
import {FaBlog} from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav>
            <header class="bg-gray-800 text-white body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" class="flex title-font font-medium items-center mb-4 md:mb-0">
                        <FaBlog className='text-2xl text-white'/>
                    </Link>
                    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link to="/API" class="mr-5 cursor-pointer">API</Link>
                        <Link to="/Firebase" class="mr-5 cursor-pointer">FirebaseAuth</Link>
                        <Link to="/sendg" class="mr-5 cursor-pointer">SendGrid</Link>
                        <Link to="/Ecommerce" class="mr-5 cursor-pointer">Ecommerce</Link>
                    </nav>
                    <button class="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-white mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </nav>
    )
}
