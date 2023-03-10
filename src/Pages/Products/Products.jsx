import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductApi } from '../../Redux/Reducers/shopReducer.js'
import Cart from './Cart.jsx'
import ProductItem from './ProductItem.jsx'

export default function Products() {
   const { dataProduct } = useSelector(state => state.shopReducer)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllProductApi())
   })
   return (
      <div className='container'>
         <h3>Shoes Shop</h3>
         <Cart />
         <h3>Product List</h3>
         <div className="row" style={{ maxWidth: 1200 }}>
            {dataProduct.map((product, index) => {
               return <div className="col-4 mt-5" key={index}>
                  <ProductItem productItem={product} />
               </div>
            })}
         </div>
      </div>
   )
}
