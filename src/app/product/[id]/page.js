import ProductDetail from '@/components/productComponents/productDetail'
import { fecthData } from '@/services'
import React from 'react'

async function Product({params}) {
  const productDetail = await fecthData(`products/${params.id}`)
    return <ProductDetail product={productDetail} />
}

export default Product
