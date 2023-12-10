import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import styles from './styles.module.css'
import { HiTemplate } from "react-icons/hi";
function ProductsCard({ data }) {
  return (
    <div className={styles.productCard}>
      <div className='flex justify-between items-center w-full'>
        <h1>products <span>({data.products.length})</span> </h1>
        <Link href={"product"}>
          <HiTemplate className='h-12 w-12 text-orange-400' />
        </Link>
      </div>
      {data.products.map(item => <div className={styles.productInfo} >
        <img src={item.thumbnail} />
        <div>
          <h2>{item.title}</h2>
          <h3>{item.description}</h3>
        </div>
        <Link href={`product/${item.id}`} >
          <MdOutlineArrowForwardIos />
        </Link>
      </div>
      ).slice(1, 3)}
    </div>
  )
}

export default ProductsCard
