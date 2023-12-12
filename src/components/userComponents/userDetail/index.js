import React from 'react'
import { PiGenderIntersex, PiPhone } from 'react-icons/pi'
import { TfiLocationPin } from "react-icons/tfi";
import { IoIosMail } from "react-icons/io";
import { LiaUniversitySolid } from 'react-icons/lia';
import styles from './styles.module.css'
function UserDetail({ user }) {

  return (
    <div className={styles.userDetail}>
      <div className={styles.userDetailBar}>
        <div>
          <label>User Name</label>
          <h1>{user.userName}</h1>
          <h1>{user.firstName + " " + user.lastName}</h1>
          <img src={user.image} alt='user' />
        </div>
        <div>
          <div className={styles.info}>
            <label>Age</label>
            <h1>{user.age}</h1>
          </div>
          <div className={styles.info}>
            <label><PiGenderIntersex /></label>
            <h1>{user.gender}</h1>
          </div>
          <div className={styles.info}>
            <label><IoIosMail /></label>
            <h1>{user.email}</h1>
          </div>
          <div className={styles.info}>
            <label><PiPhone /></label>
            <h1>{user.phone}</h1>
          </div>
          <div className={styles.info}>
            <label><LiaUniversitySolid /></label>
            <h1>{user.university}</h1>
          </div>
        </div>
      </div>
      <div className={styles.address}>
          <label className='text-4xl'><TfiLocationPin /> <h1>Location</h1></label>
          
        <div>
          <div>
            <h1>City</h1>
            <h2>{user.company.address.city}</h2>
            <h1>Address</h1>
            <h2>{user.company.address.address}</h2>
          </div>
          <div>
            <h1>postalCode</h1>
            <h2>{user.company.address.postalCode}</h2>
            <h1>State</h1>
            <h2>{user.company.address.state}</h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserDetail
