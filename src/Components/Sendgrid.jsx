import React, { useState } from 'react'
import swal from 'sweetalert';
import axios from "axios";

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

        const res = fetch(''
        )
        res.then(res => {
            if (res.ok === true) {
                setUser({
                    fname: '',
                    lname: '',
                    email: '',
                    phone: '',
                    address: ''
                })
                swal(
                    'Successfully',
                    'Mail has been sended',
                    "success"
                )
            } else if (res.ok === false) {
                swal(
                    'Try Later',
                    'Something went wrong...',
                    "warning"
                )
            }
        })

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


// const handleSubmit = (event) => {

//     event.preventDefault();
//     const postData = { username, email, message, mob, area, domain, ref };

//     axios.post('../.netlify/functions/contactform', postData, setloading(true)).then(response => {
//         setloading(false);
//         Swal.fire(
//             'Form Submitted Successfully !',
//             'We will get back you Soon!',
//             'success'
//         )

//         // reseting form values
//         event.target.reset();

//     }).catch(error => {
//         setloading(false);
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong! Please Try Again Later or Check your Internet Connection',
//         })
//     });
// }