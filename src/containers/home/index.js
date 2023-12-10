import ProductsCard from '@/components/productsCard'
import UsersCard from '@/components/usersCard'
import { fecthData } from '@/services'
import React from 'react'
import styles from './styles.module.css'
import StatBar from '@/components/statCard'
async function HomeContainer() {

  const [product,
    user,
    quotesData,
    todosData,
    postsData,
    categoriesData] = await Promise.all([
      fecthData("product"),
      fecthData("user"),
      fecthData("quotes"),
      fecthData("todos"),
      fecthData("posts"),
      fecthData("products/categories"),
    ])

  return (
    <div className={styles.home}>
      <div className='mr-[-24rem] flex  flex-col gap-8'>
        <ProductsCard data={product} />
        <StatBar product={product.products.length}
          users={user.users.length} />
          <h1 className='text-center w-full text-4xl text-white  capitalize drop-shadow-sm shadow-white'>categories</h1>
        <article className='flex w-[700px] flex-wrap p-4 justify-center items-center  '>
          {categoriesData.map(item => <span className='bg-gray-300 p-4 rounded-full shadow-lg text-2xl  shadow-white text-stone-600 m-4'>{item}</span>)}
        </article>
      </div>
      <UsersCard data={user} />
      <div >
        <article>
          <div className='text-stone-100 text-xl bg-gradient-to-br w-96 to-gray-500 from-orange-500 m-8 rounded-3xl p-3 shadow-white shadow-2xl'>
            <h1 className='font-serif italic'>{quotesData.quotes[0].quote}</h1>
            <h1 className='italic font-mono uppercase text-orange-500 font-extrabold text-right my-3 '>{quotesData.quotes[0].author}</h1>
          </div>
          <div className={todosData.todos[0].completed === true ? "bg-gradient-to-br to-green-600 from-orange-300 p-8 m-8  rounded-3xl shadow-2xl shadow-white " : " shadow-2xl shadow-white  bg-gradient-to-br to-red-600 rounded-3xl from-orange-300 p-8 m-8"}>
            <label className='italic font-serif font-extrabold text-3xl text-orange-200'>Todo</label>
            <h1 className='font-serif italic text-white'>{todosData.todos[0].todo}</h1>
          </div>
          <div className={todosData.todos[1].completed === true ? "bg-gradient-to-br to-green-600 from-orange-300 p-8 m-8 rounded-3xl  shadow-2xl shadow-white " : " rounded-3xl  shadow-2xl shadow-white bg-gradient-to-br to-red-600 from-orange-300 p-8 m-8"}>
            <label className='italic font-serif font-extrabold text-3xl text-orange-200'>Todo</label>
            <h1 className='font-serif italic text-white'>{todosData.todos[1].todo}</h1>
          </div>
          <div className='text-blue-900 text-xl bg-gradient-to-br w-96 to-gray-300 from-orange-200 m-8 rounded-3xl p-3 shadow-white shadow-2xl'>
            <h1 className='font-serif italic'>{postsData.posts[0].title}</h1>
            <h1 className='italic font-mono uppercase text-stone-900 font-extrabold text-right my-3 '>{postsData.posts[0].body}</h1>
          </div>
        </article>

      </div>
    </div>
  )
}

export default HomeContainer
