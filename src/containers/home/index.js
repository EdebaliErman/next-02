'use client'
import ProductsCard from '@/components/productsCard'
import UsersCard from '@/components/usersCard'
import React from 'react'
import styles from './styles.module.css'
import StatBar from '@/components/statCard'
import { useData } from '@/hook/dataHook'
function HomeContainer() {
  const { data } = useData()
  return (
    <div className={styles.home}>
      <div className='mr-[-24rem] flex  flex-col gap-8'>
        <ProductsCard data={data.product} />
        <StatBar product={data.product.length}
          users={data.user.length} />
        <h1 className='text-center w-full text-4xl text-white  capitalize drop-shadow-sm shadow-white'>categories</h1>
        <article className='flex w-[700px] flex-wrap p-4 justify-center items-center  '>
          {data.categories.map((item, key) => <span key={key} className='bg-gray-300 p-4 rounded-full shadow-lg text-2xl  shadow-white text-stone-600 m-4'>{item}</span>).slice(1, 7)}
        </article>
      </div>
      <UsersCard data={data.user} />
      <div >


      </div>
    </div>
  )
}

export default HomeContainer
