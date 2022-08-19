import React, { useState } from 'react';
import axios from 'axios';
// import swal from 'sweetalert';

export default function Sendgrid() {

    // created a state variable of object type and defining the value of fields
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: ''
    });

    let name, value;
    const getData = (event) => {

        // get the name of field on onChange
        name = event.target.name;

        // get the value of field on onChange
        value = event.target.value;

        // set the value of user using spread operator to override the value
        setUser({ ...user, [name]: value })
    }

    const handleForm = (event) => {
        event.preventDefault();

        // destructuring the object into variable
        const { fname, lname, email, phone, address } = user;

        const postData = { fname, lname, email, phone, address };

        axios.post('../.netlify/functions/sendgrid-testing-form', postData)

    }

    return (
        <div className='bg-violet-600 h-screen flex justify-center items-center'>
            <form method='POST' className='border rounded-xl px-4 py-5 mx-2' onSubmit={handleForm}>
                <legend className='text-xl text-center text-white font-bold'>Submit on SendGrid</legend>
                <div className='flex mb-1'>
                    <div className='m-2'>
                        <label className='block pointer-events-none text-white'>First Name</label>
                        <input
                            className='py-1 px-2 rounded-sm w-full'
                            type="text"
                            name="fname"
                            autoComplete='off'
                            required
                            value={user.fname}
                            onChange={getData}
                        />
                    </div>
                    <div className='m-2'>
                        <label className='block pointer-events-none text-white'>Last Name</label>
                        <input
                            className='py-1 px-2 rounded-sm w-full'
                            type="text"
                            name="lname"
                            autoComplete='off'
                            required
                            value={user.lname}
                            onChange={getData} />
                    </div>
                </div>
                <div className='flex mb-1'>
                    <div className=' m-2 '>
                        <label className='block pointer-events-none text-white'>Email ID</label>
                        <input
                            className='py-1 px-2 rounded-sm w-full'
                            type="email"
                            name="email"
                            autoComplete='off'
                            required
                            value={user.email}
                            onChange={getData} />
                    </div>
                    <div className=' m-2'>
                        <label className='block pointer-events-none text-white'>Phone No.</label>
                        <input
                            className='py-1 px-2 rounded-sm w-full'
                            type="tel"
                            name="phone"
                            autoComplete='off'
                            required
                            value={user.phone}
                            onChange={getData}
                            maxLength={10}
                            minLength={10}
                        />
                    </div>
                </div>
                <div className="flex mb-1">
                    <div className=' w-full m-2'>
                        <label className='block pointer-events-none text-white'>Address</label>
                        <textarea
                            className='resize-none py-1 px-2 rounded-sm w-full'
                            type='text'
                            name="address"
                            autoComplete='off'
                            required
                            value={user.address}
                            onChange={getData}></textarea>
                    </div>
                </div>
                <div className="flex">
                    <button type='submit' className='bg-blue-600 text-white py-2 px-4 rounded-lg transition-shadow hover:shadow-lg ml-2'>
                        Submit
                    </button>
                </div>
            </form>
        </div >
    )
}
