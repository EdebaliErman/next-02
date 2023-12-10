'use client'
import { fecthData } from '@/services'
import React, { useState } from 'react'
import styles from './styles.module.css'
async function User() {
  const data = await fecthData("users")
  return (
    <div className={styles.User}>
      <table>
        <thead>
          <th>Id</th>
          <th>Profile Foto</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>maidenName</th>
          <th>username</th>
          <th>age</th>
          <th>gender</th>
          <th>email</th>
          <th>phone</th>
          <th>password</th>
          <th>university</th>
        </thead>
        <tbody>
          {
            data && data.users.map(item => <tr key={item.id}>
              <td>{item.id}</td>
              <td><img className='w-12 h-12 rounded-full bg-gray-500' src={item.image} alt='profile' /> </td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.maidenName}</td>
              <td>{item.username}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.password}</td>
              <td>{item.university}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default User
