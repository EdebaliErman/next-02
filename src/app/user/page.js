'use client'
import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { useData } from '@/hook/dataHook'

function Users() {
  const { data ,handleDeleted} = useData()

  return (
    <div className={styles.User}>
      <table>
        <thead>
          <tr>
            <th >Id</th>
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
            <th>Detail</th>
            <th>Deleted</th>
          </tr>
        </thead>
        <tbody>
          {
            data.user.map((item, key) => <tr key={key}>
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
              <td> <Link href={"user/" + item.id}>Detail</Link></td>
              <td><button onClick={() => handleDeleted(item.id,data.user)}>Delted</button></td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users
