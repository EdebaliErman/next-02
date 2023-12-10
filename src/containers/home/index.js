import ProductsCard from '@/components/productsCard'
import UsersCard from '@/components/usersCard'
import { fecthData } from '@/services'
import React from 'react'
import styles from './styles.module.css'
import StatBar from '@/components/statCard'
async function HomeContainer() {

  const [product, user] = await Promise.all([fecthData("product"), fecthData("user")])

  return (
    <div className={styles.home}>
      <div className='mr-[-24rem] flex  flex-col gap-8'>
        <ProductsCard data={product} />
        <StatBar product={product.products.length}
          users={user.users.length} />
      </div>
      <UsersCard data={user} />
    </div>
  )
}

export default HomeContainer
