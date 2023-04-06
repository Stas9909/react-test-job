import React from "react";
import './CustomersTableRow.css';

const CustomersTableRow = ({ customer }) => {

  const { customerName, companyName, phoneNumber, email, countryName, stausName } = customer;

  return (
    <tr className="tableRow">
      <td>{customerName}</td>
      <td>{companyName}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>{countryName}</td>
      <td>
        <div className="buttonLike" style={{ backgroundColor: stausName === "Active" ? "rgba(22, 192, 152, 0.38)" : "#FFC5C5", border: stausName === "Active" ? "1px solid #00B087" : "1px solid #DF0404", color: stausName === "Active" ? "#00B087" : "#DF0404" }}>{stausName}</div>
      </td>
    </tr>
  )
}

export default CustomersTableRow;