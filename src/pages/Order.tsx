import React, { ReactElement, useState } from 'react'
import TableHOC from '../components/admin/TableHOC'
import { Column } from 'react-table'
import { Link } from 'react-router-dom'
type DataType={
  _id:string;
  amount:number;
  discount:number;
  quantity:number;
  status:ReactElement;
  action:ReactElement;
}

const column : Column<DataType>[]=[{
   Header:"ID",
   accessor:"_id",
},
{
  Header:"Quantity",
  accessor:"quantity",
},
{
   Header:"Discount",
   accessor:"discount",
},
{
  Header:"Status",
  accessor:"status"
},
{
    Header:"Action",
    accessor:"action"
}]
const Order = () => {

    const[rows]=useState<DataType[]>([
        {
            _id:"ffefe",
            amount:300555,
            discount:4555,
            quantity:10,
            status:<span className='red'>Processing</span>,
            action:<Link to={`/order/ffefe`}>View</Link>,
        }
    ])

    const Table=TableHOC<DataType>(column,rows,"dashboard-product-box","Orders",rows.length>6)()
  return (
    <div className='container'>
        <h1>My Orders</h1>
        {Table}
    </div>
  )
}

export default Order