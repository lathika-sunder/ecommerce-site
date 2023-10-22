import React from 'react'
import './ShopPage.css'
import SearchComp from '../../components/SearchComp/SearchComp'
import ProductsComp from '../../components/ProductsComp/ProductsComp'
import CategoriesComp from '../../components/CategoriesComp/CategoriesComp'
const ShopPage = () => {
  return (
    <div>
    <CategoriesComp />
    <SearchComp/>
    <ProductsComp /></div>
  )
}

export default ShopPage