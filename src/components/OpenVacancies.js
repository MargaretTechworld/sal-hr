import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { RiArrowDropRightLine } from 'react-icons/ri';
import Dropdown from '../shared/Dropdown';
import logo from '../assets/sal-logo.png';
import '../styles/OpenVacancies.css';

const OpenVacancies = () => (
  <div className="vacancy-container">
    <div className="vacancy-sec-container">
      <div className="company-logo-div">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="company-name">Sierra Leone Water Company</h1>
      </div>
      <hr className="horizontal-rule" />
      <div className="vancacy-search">
        <a href="#">login</a>
        <h2>Open OpenVacancies</h2>
        <div className="vancacy-search-details">
          <p>0 records found, showing 0-0 of 0</p>
          <div className="search-input">
            <input className="vancacy-input" type="text" placeholder="Search for Open vancancy" />
            <div className="search-icon-div">
              <IoIosSearch className="search-icon" />
            </div>
          </div>
        </div>
        <div className="vacancy-sort">
          <h2>Sort by</h2>
          <Dropdown />
        </div>
      </div>
    </div>
    <div>
      <div className="filter-div">
        <h3>Filter Result By</h3>
        <hr className="horizontal-rule" />
        <div>
          <div className="vacancy-type">
            <RiArrowDropRightLine className="vacancy-type-arrow" />
            <p>Location</p>
          </div>
          <div className="vacancy-type">
            <RiArrowDropRightLine className="vacancy-type-arrow" />
            <p>Department</p>
          </div>
          <div className="vacancy-type">
            <RiArrowDropRightLine className="vacancy-type-arrow" />
            <p>Salary</p>
          </div>
        </div>
      </div>
      <div className="search-result">
        <p>Search result not found</p>
      </div>
    </div>
  </div>
);

export default OpenVacancies;
