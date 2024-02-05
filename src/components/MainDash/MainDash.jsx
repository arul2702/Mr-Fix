import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import Buttons from '../Buttons/Buttons';

const MainDash = () => {
  return (
    <div className="MainDash">
        <h1 className='page-head'>DashBoard</h1>
        <Cards/>
        <Buttons/>
        <h3 className="table-heading">Recent Complaints</h3>
        <Table/>
    </div>
  )
}

export default MainDash