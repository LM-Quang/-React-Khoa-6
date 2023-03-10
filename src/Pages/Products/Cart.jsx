import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
   const { cart } = useSelector(state => state.shopReducer)
   return (
      <div>
         <h3>Cart</h3>
         <table className='table'>
            <thead>
               <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>image</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               {cart.map((item, index) => {
                  return <tr key={index}>
                     <td>{item.id}</td>
                     <td>{item.name}</td>
                     <td><img src={item.image} alt={item.name} width={50} /></td>
                     <td>{item.price}</td>
                     <td>{item.quantity}</td>
                     <td>{(item.price * item.quantity).toLocaleString()}</td>
                     <td>
                        <button className='btn btn-danger'>Delete</button>
                     </td>
                  </tr>
               })}
            </tbody>
         </table>
      </div>
   )
}
