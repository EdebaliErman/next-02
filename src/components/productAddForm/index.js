'use client'
import React from 'react'
import styles from './styles.module.css'
import { PiGenderIntersex, PiPhone } from 'react-icons/pi'
import { IoIosMail } from 'react-icons/io'
import { LiaUniversitySolid } from 'react-icons/lia'
function ProductForm() {
    const [add, setAdd] = React.useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://dummyjson.com/products/add', {
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
            <label>Title</label>
            <input type='text' name='title' onChange={handleChange} placeholder='username' />
        </div>
        <div>
            <label>Price</label>
            <input type='text' name='price' onChange={handleChange} placeholder='Last Name' />
        </div>
        <div>
            <label>description</label>
            <input type='text' name='description' onChange={handleChange} placeholder='Nick Name' />
        </div>
        <div>
            <label>Category</label>
            <input type='text' name='category' onChange={handleChange} placeholder='Age' />
        </div>
        <hr></hr>

        <div className={styles.info}>
            <label><IoIosMail /></label>
            <input type='mail' name='stock' onChange={handleChange} placeholder='mail' />
        </div>
        <div className={styles.rating}>
            <label><PiPhone /></label>
            <input type='text' name='phone' placeholder='phone' />
        </div>
        <div className={styles.discountPercentage}>
            <label><LiaUniversitySolid /></label>
            <input type='text' name='university' placeholder='Universty' />
        </div>
        <button>Submit</button>
    </form>
}

export default ProductForm
