import React from 'react'
import { Link } from 'react-router-dom'

function Ecommerce() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-start flex-wrap m-4'>

        <div class="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-md">
          <Link to='/' class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </Link>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-black title-font text-lg font-medium">The Catalyzer</h2>
            <p class="mt-1">Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ullam?</p>
            <p class="mt-1">$16.00</p>
            <div className="flex justify-start items-center">
              <button type='submit' className='bg-blue-600 text-white py-2 px-4 rounded-lg transition-shadow hover:shadow-lg mr-2'>Buy Now</button>
              <button type='submit' className='bg-blue-600 text-white py-2 px-4 rounded-lg transition-shadow hover:shadow-lg'>Add to Cart</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Ecommerce