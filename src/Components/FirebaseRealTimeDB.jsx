import React, { useState } from 'react'
import { signInWithGoogle } from '../firebase';
import swal from 'sweetalert';

export default function FirebaseRealTimeDB() {

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
    const url = `https://react-3b6d8-default-rtdb.firebaseio.com/user.json?auth=${process.env.REACT_APP_FIREBASE_AUTH}`;
    event.preventDefault();

    const { fname, lname, email, phone, address } = user;
    const res = fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fname, lname, email, phone, address })
    })
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
          'Data saved on firebase',
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
    <div className='bg-violet-600 h-screen flex justify-center items-center flex-col'>
      <form method='POST' className='border rounded-xl px-4 py-5 mx-2' onSubmit={handleForm}>
        <legend className='text-xl text-center text-white font-bold'>Submit on firebase</legend>
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
      <span className='text-white font-bold'>OR</span>
      <button onClick={signInWithGoogle} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" >
        <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
        Sign in with Google
      </button>
    </div >
  )
}
