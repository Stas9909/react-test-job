import React, { useEffect, useState } from "react";
import './Main.css';
import axios from 'axios';
import CustomersTable from '../CustomersTable/CustomersTable';

const Main = () => {
  const [customersData, setCustomersData] = useState([]);
  const [filteredCustomersData, setFilteredCustomersData] = useState(null)

  const handleSearchInput = (e) => {
    const filteredList = customersData.filter((customer) => {
      return Object.values(customer).map(customer => customer.toString().toLowerCase()).includes(e.target.value.toLowerCase().trim())
    })

    if (e.target.value === '') {
      setFilteredCustomersData(null);
      return
    }

    setFilteredCustomersData(filteredList)
  }

  useEffect(() => {
    axios.get('../../../react-test-job/data.json')
      .then(response => setCustomersData(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <main className="main">
      <div className="divForGreeting">
        <h2 className="greeting">Hello Evano</h2>
      </div>
      <div className="wrapperForCustomersInfo">
        <div className="customersTable">
          <div className="divForHeaders">
            <h2 className="bigInscription">All Customers</h2>
            <h4 className="smallInscription">Active Members</h4>
          </div>
          <div className="divForSearch">
            <button className="searchBtn">🔍</button>
            <input type="text" name="search" className="searchInput" placeholder="Search" onChange={handleSearchInput} />
          </div>
        </div>
        <CustomersTable customersData={filteredCustomersData ? filteredCustomersData : customersData} />
        <div className="footerBlock">
          <div className="divForLowerInscription">
            <h4 className="lowerInscription">Showing 1 to 8 of 256K entries</h4>
          </div>
          <div className="divForPaginationBtns">
            <button className="PaginationBtns lessThen"/>
            <button className="PaginationBtns">1</button>
            <button className="PaginationBtns">2</button>
            <button className="PaginationBtns">3</button>
            <button className="PaginationBtns">4</button>
            <span>...</span>
            <button className="PaginationBtns">40</button>
            <button className="PaginationBtns greaterThen"/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;