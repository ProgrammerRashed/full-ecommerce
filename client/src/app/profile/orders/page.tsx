import { OrdersTable } from '@/components/profile/OrdersTable'
import DataTable from '@/components/shared/DataTable'
import React from 'react'

const OrdersPage = () => {
  return (
    <div>
      <h1 className='text-xl font-bold mb-10'>My Orders</h1>
      
        <div>
        <DataTable/>
        </div>

   
    </div>
  )
}

export default OrdersPage
