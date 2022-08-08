import React, { useState } from 'react'
import '../Stylesheet/FirebaseAuth.css'
import '../Stylesheet/InputControl.css'
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
    event.preventDefault();

    const { fname, lname, email, phone, address } = user;
    const res = fetch(
      'https://fir-3fbe7-default-rtdb.firebaseio.com/user.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          phone,
          address
        })
      }
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
          'Data saved on firebase',
          "success"
        )
      } else if (res.ok === false) {
        swal(
          'Try Later',
          'Something went wrong...',
          "warning"
        )
      } console.log("response status code ===> ", res);
    })

  }

  return (
    <div className='myContainer border border-dark'>
      <form method='POST' onSubmit={handleForm}>
        <legend>Submitted on firebase</legend>
        <div className=' row'>
          <div className='col-6 input_container'>
            <input
              type="text"
              name="fname"
              autoComplete='off'
              required
              value={user.fname}
              onChange={getData}
            />
            <label>First Name</label>
          </div>
          <div className='col-6 input_container'>
            <input
              type="text"
              name="lname"
              autoComplete='off'
              required
              value={user.lname}
              onChange={getData} />
            <label>Last Name</label>
          </div>
        </div>
        <div className='row d-flex'>
          <div className='col-6 input_container'>
            <input
              type="email"
              name="email"
              autoComplete='off'
              required
              value={user.email}
              onChange={getData} />
            <label>Email ID</label>
          </div>
          <div className='col-6 input_container'>
            <input
              type="tel"
              name="phone"
              autoComplete='off'
              required
              value={user.phone}
              onChange={getData}
              maxLength={10}
              minLength={10}
            />
            <label>Phone No.</label>
          </div>
        </div>
        <div className="row">
          <div className='col-12 textarea_container p-0'>
            <textarea
              type='text'
              name="address"
              style={{ resize: "none" }}
              autoComplete='off'
              required
              value={user.address}
              onChange={getData}></textarea>
            <label>Address</label>
          </div>
        </div>
        <button type='submit' className='btn btn-primary mt-2'>
          Submit
        </button>
      </form>
    </div >
  )
}
