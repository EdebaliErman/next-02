'use client'
import { fecthData } from '@/services'
import React from 'react'

export const useData = () => {
    const [data, setData] = React.useState({
        product: [],
        user: [],
        quotes: [],
        todos: [],
        posts: [],
        categories: []
    })

    React.useEffect(() => {
        const getItem = async () => {
            try {
                //! Fecthing...
                const [
                    productData,
                    userData,
                    quotesData,
                    todosData,
                    postsData,
                    categoriesData
                ] = await Promise.all(
                    [
                        fecthData("product"),
                        fecthData("user"),
                        fecthData("quotes"),
                        fecthData("todos"),
                        fecthData("posts"),
                        fecthData("products/categories"),
                    ]
                )
                //! Add 'is stating....
                setData({
                    product: productData.products,
                    user: userData.users,
                    quotes: quotesData.quotes,
                    todos: todosData.todos,
                    posts: postsData.posts,
                    categories: categoriesData
                })
            } catch (error) {
                console.log(error)
            }
        }
        getItem()
    }, [])


    const handleDeleted = async (id, data) => {
        try {
            const newdata = data.filter(item => item.id !== id)
            setData({ user: [...newdata], product: [...newdata] })
        } catch (error) {
            console.error('Error simulating user deletion:', error);
        }
    }



    return { handleDeleted, data }
}

