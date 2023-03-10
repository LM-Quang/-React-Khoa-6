import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../Redux/Reducers/shopReducer.js'

export default function ProductItem(props) {
   const { image, name, price } = props.productItem
   const dispatch = useDispatch()
   return (
      <div className="card" style={{ width: '20rem' }}>
         <img src={image} alt="ramdom" width={200} className="card-img-top" />
         <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price} ¥</p>
            <button className="btn btn-primary" onClick={() => {
               const cartItem = { ...props.productItem, quantity: 1 }
               dispatch(addToCartAction(cartItem))
            }}>Add to Cart</button>
         </div>
      </div>
   )
}
