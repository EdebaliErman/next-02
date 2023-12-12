'use client'
import React from 'react'
import styles from './styles.module.css'
import { PiGenderIntersex, PiPhone } from 'react-icons/pi'
import { IoIosMail } from 'react-icons/io'
import { LiaUniversitySolid } from 'react-icons/lia'
function UserAddForm() {
    const [add, setAdd] = React.useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(add)
        })
            .then(res => res.json())

    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setAdd({ ...add, [name]: value })
    }

    return <form onSubmit={handleSubmit} className={styles.addUser}>
        <div>
            <label>User First Name</label>
            <input type='text' name='firstName' onChange={handleChange} placeholder='username' />
        </div>
        <div>
            <label>User Last Name</label>
            <input type='text' name='lastName' onChange={handleChange} placeholder='Last Name' />
        </div>
        <div>
            <label>User Nick Name</label>
            <input type='text' name='username' onChange={handleChange} placeholder='Nick Name' />
        </div>
        <div>
            <label>Age</label>
            <input type='text' name='age' onChange={handleChange} placeholder='Age' />
        </div>
        <hr></hr>
        <div className={styles.info}>
            <label><PiGenderIntersex /></label>
            <input type='radio' onChange={handleChange} name='gender' value={"male"} placeholder='username' />
            <input type='radio' onChange={handleChange} name='gender' value={"famale"} placeholder='username' />
        </div>
        <div className={styles.info}>
            <label><IoIosMail /></label>
            <input type='mail' name='email' onChange={handleChange} placeholder='mail' />
        </div>
        <div className={styles.info}>
            <label><PiPhone /></label>
            <input type='text' name='phone' placeholder='phone' />
        </div>
        <div className={styles.info}>
            <label><LiaUniversitySolid /></label>
            <input type='text' name='university' placeholder='Universty' />
        </div>
        <div>
            <h1>City</h1>
            <input type='text' name='city' onChange={handleChange} placeholder='City' />
            <h1>Address</h1>
            <input type='text' name='address' onChange={handleChange} placeholder='Address' />
        </div>
        <div>
            <h1>postalCode</h1>
            <input type='text' name='postalCode' onChange={handleChange} placeholder='postalCode' />

            <h1>State</h1>
            <input type='text' name='state' onChange={handleChange} placeholder='State' />
        </div>
        <button>Submit</button>
    </form>
}

export default UserAddForm
