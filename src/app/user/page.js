'use client'
import { deleteData, fecthData } from '@/services'
import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

function Users() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    const getItem = async () => {
      try {
        const req = await fecthData("users")
        setData(req.users || [])
      } catch (error) {
        console.log(error)
      }
    }
    getItem()
  }, [])

  const handleDeleted = async (id,key) => {
    try {
      const newdata = data.filter(item => item.id !== id)
      setData([...newdata])
    } catch (error) {
      console.error('Error simulating user deletion:', error);
    }
  }

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
            data.map((item, key) => <tr key={key}>
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
              <td><button onClick={() => handleDeleted(item.id,key)}>Delted</button></td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users
