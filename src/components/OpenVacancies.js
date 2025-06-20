import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import logo from "../assets/sal-logo.png";
import "../styles/OpenVacancies.css";
import JobsAdvert from "./JobsAdvert";

const OpenVacancies = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [toggleLocation, setToggleLocation] = useState(false);
  const [toggleDepartment, setToggleDepartment] = useState(false);
  const [toggleSalary, setToggleSalary] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const locations = ["Freetown", "Bo", "Kenema", "Makeni"];
  const departments = ["HR", "Engineering", "Finance", "Customer Support"];

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setShowFilters(true); // Collapse filters on desktop
    } else {
      setShowFilters(false); // Show filters on mobile
    }
  }, [isDesktop]);

  return (
    <div className="vacancy-container">
      <div className="vacancy-sec-container">
        <div className="company-logo-div">
          <img className="logo" src={logo} alt="logo" />
          <div className="logo-name-div">
            <h1 className="company-name">Sierra Leone Water Company</h1>
            <p>Tower Hill -P M Bag 42 - Freetown - Sierra Leone</p>
          </div>
        </div>
        <hr className="horizontal-rule" />
        <div className="vancacy-search">
          <a href="#">login</a>
          <h2>Open Vacancies</h2>
          <div className="vancacy-search-details">
            <p>0 records found, showing 0–0 of 0</p>
            <div className="search-input">
              <input
                className="vancacy-input"
                type="text"
                placeholder="Search for Open Vacancy"
              />
              <div className="search-icon-div">
                <IoIosSearch className="search-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-vac">
        <div className="filter-div">
          <div className="filter-type" onClick={() => setShowFilters(!showFilters)}>
            <h3>Filter Result By</h3>
            {showFilters ? (
              <RiArrowDropDownLine className="filter-arrow" />
            ) : (
              <RiArrowDropRightLine className="filter-arrow" />
            )}
          </div>
          <hr className="horizontal-rule" />

          {showFilters && (
            <div className="filter-options">
              <div className="vacancy-type" onClick={() => setToggleLocation(!toggleLocation)}>
                {toggleLocation ? (
                  <RiArrowDropDownLine className="vacancy-type-arrow" />
                ) : (
                  <RiArrowDropRightLine className="vacancy-type-arrow" />
                )}
                <p>Location</p>
              </div>
              {toggleLocation && (
                <ul className="filter-list">
                  {locations.map((loc, i) => (
                    <li key={i}>
                      <input type="checkbox" id={`loc-${i}`} />
                      <label htmlFor={`loc-${i}`}>{loc}</label>
                    </li>
                  ))}
                </ul>
              )}

              {/* Department */}
              <div className="vacancy-type" onClick={() => setToggleDepartment(!toggleDepartment)}>
                {toggleDepartment ? (
                  <RiArrowDropDownLine className="vacancy-type-arrow" />
                ) : (
                  <RiArrowDropRightLine className="vacancy-type-arrow" />
                )}
                <p>Department</p>
              </div>
              {toggleDepartment && (
                <ul className="filter-list">
                  {departments.map((dept, i) => (
                    <li key={i}>
                      <input type="checkbox" id={`dept-${i}`} />
                      <label htmlFor={`dept-${i}`}>{dept}</label>
                    </li>
                  ))}
                </ul>
              )}

              {/* Salary */}
              <div className="vacancy-type" onClick={() => setToggleSalary(!toggleSalary)}>
                {toggleSalary ? (
                  <RiArrowDropDownLine className="vacancy-type-arrow" />
                ) : (
                  <RiArrowDropRightLine className="vacancy-type-arrow" />
                )}
                <p>Salary</p>
              </div>
              {toggleSalary && (
                <div className="salary-filter">
                  <label>Minimum: </label>
                  <input type="number" placeholder="Min" />
                  <label>Maximum: </label>
                  <input type="number" placeholder="Max" />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="search-result">
          <JobsAdvert />
        </div>
      </div>
    </div>
  );
};

export default OpenVacancies;