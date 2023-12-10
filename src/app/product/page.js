'use client'
import { fecthData } from '@/services'
import React from 'react'
import styles from './styles.module.css'
async function Product() {
  const data = await fecthData("products")
  return (
    <div className={styles.products}>
      <table>
        <thead>
          <th>Id</th>
          <th>images</th>
          <th>title</th>
          <th>description</th>
          <th>price</th>
          <th>stock</th>
          <th>brand</th>
          <th>category</th>
        </thead>
        <tbody>
          {
            data && data.products.map(item => <tr key={item.id}>
              <td>{item.id}</td>
              <td><img className='w-12 h-12 rounded-full bg-gray-500' src={item.thumbnail} alt='profile' /> </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Product
