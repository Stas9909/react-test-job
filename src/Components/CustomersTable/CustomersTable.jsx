import React, { useEffect, useState } from "react";
import './CustomersTable.css';
import CustomersTableRow from './CustomersTableRow/CustomersTableRow';

const CustomersTable = (props) => {

  return (
    <table className="table">
      <thead>
        <tr className="tr">
          <th>Customer Name</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Country</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.customersData.map((customer) => {
          return <CustomersTableRow customer={customer} key={customer.id}/>
        })
        }
      </tbody>

    </table>
  )
}

export default CustomersTable;