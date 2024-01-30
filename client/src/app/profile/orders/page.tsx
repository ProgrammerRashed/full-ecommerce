import React from 'react'

const OrdersPage = () => {
  return (
    <div>
      <h1 className='text-xl font-bold mb-10'>My Orders</h1>
      <div className='flex justify-between items-center'>
        <div >
          <p className='font-medium'>Order Number: ##################################</p>
          <p className='text-sm'>Total: 200.00৳</p>
          <p className='text-sm'>Ordered On: 11/12/2023</p>
         </div>
        <div>
          <p>View Order</p>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage
