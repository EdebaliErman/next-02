'use client'
import React, { useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { MdOutlinePriceCheck } from "react-icons/md";
import styles from './styles.module.css'
import RadiusStat from '../radiusStat';
function ProductDetail({ product }) {
  console.log(product)
  const [count, setCount] = useState(0)
  return (
    <div key={product.id} className='flex gap-4' >
      <div className={styles.product}>
        <header>
          <div>
            <label>{product.title}</label>
          </div>
          <div>
            <MdOutlinePriceCheck />
            <h1>{product.price}</h1>
          </div>
        </header>
        <main>
          <img src={product.images[count]} alt='img' />
          <div>
            {product.images.length > 0 && <button onClick={() => setCount(count > product.images.length ? count - 1 : 0)}><HiArrowLeft className='left-0' /></button>}
            {product.images.length > 1 && <button onClick={() => setCount(count < product.images.length - 1 ? count + 1 : 0)}><HiArrowRight className='right-0' /></button>}
          </div>
        </main>
        <footer className='capitalize '>
          <label>Description</label>
          <p >
            {product.description}
          </p>
          <label className=' mt-2'>Category</label>
          <h1 className='text-4xl my-2'>{product.category}</h1>
        </footer>
      </div>
      <div className='flex flex-col gap-4'>
        <RadiusStat
          title={"Stock"}
          count={product.stock} />
        <RadiusStat
          title={"rating"}
          count={Math.floor(product.rating)*10} />
        <RadiusStat
          title={"discountPercentage"}
          count={Math.floor(product.discountPercentage)} />
      </div>
    </div>
  )
}

export default ProductDetail
