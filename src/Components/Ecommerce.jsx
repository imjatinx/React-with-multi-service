import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

function Ecommerce() {

  // const [products, setProducts] = useState({})

  const getProducts = async () => {
    const productAPI = 'http://localhost:1337/api/products?populate=*';

    const config = {
      method: 'get',
      url: productAPI,
      headers: {
        'Authorization': 'Bearer 531558344948a8a8e8327dc9432b20822f02e0fe7da49cd242546b33bd511544ecd4fd0380bc4c3d3173c551c9a99700164bfe2b279f8fc32cffc518c6cb67cc9e3392c84acb7fb2145e9d698b0ca31378a790e6fa86aa62f02a3081f0c17f1ef9f64b5b4129b5800c545fab6a2d8968ead2daead9f5254d34a20efdb22f70ca'
      }
    }

    const response = await axios.get(config)
    response.then(res => {
      console.log(res);
    })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <div className='container mx-auto'>
      <div className='flex justify-start flex-wrap m-4'>

        <div className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-md">
          <Link to='/' className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className="text-black title-font text-lg font-medium">fdsfdsf</h2>
            <p className="mt-1">Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ullam?</p>
            <p className="mt-1">$16.00</p>
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