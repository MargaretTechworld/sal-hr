import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri';
import logo from '../assets/sal-logo.png';
import '../styles/OpenVacancies.css';
import JobsAdvert from './JobsAdvert';

const OpenVacancies = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [toggleLocation, setToggleLocation] = useState(false);
  const [toggleDepartment, setToggleDepartment] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const locations = ['Freetown', 'Bo', 'Kenema', 'Makeni'];
  const departments = ['HR', 'Engineering', 'Finance', 'Customer Support'];

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShowFilters(isDesktop);
  }, [isDesktop]);

  const handleKeyDown = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') callback();
  };

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
          <Link to="/login">login</Link>
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
          <div
            className="filter-type"
            role="button"
            tabIndex={0}
            onClick={() => setShowFilters(!showFilters)}
            onKeyDown={(e) => handleKeyDown(e, () => setShowFilters(!showFilters))}
          >
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
              {/* Location */}
              <div
                className="vacancy-type"
                role="button"
                tabIndex={0}
                onClick={() => setToggleLocation(!toggleLocation)}
                onKeyDown={(e) => handleKeyDown(e, () => setToggleLocation(!toggleLocation))}
              >
                {toggleLocation ? (
                  <RiArrowDropDownLine className="vacancy-type-arrow" />
                ) : (
                  <RiArrowDropRightLine className="vacancy-type-arrow" />
                )}
                <p>Location</p>
              </div>
              {toggleLocation && (
                <ul className="filter-list">
                  {locations.map((loc) => (
                    <li key={loc}>
                      <input type="checkbox" id={`loc-${loc}`} />
                      <label htmlFor={`loc-${loc}`}>{loc}</label>
                    </li>
                  ))}
                </ul>
              )}

              {/* Department */}
              <div
                className="vacancy-type"
                role="button"
                tabIndex={0}
                onClick={() => setToggleDepartment(!toggleDepartment)}
                onKeyDown={(e) => handleKeyDown(e, () => setToggleDepartment(!toggleDepartment))}
              >
                {toggleDepartment ? (
                  <RiArrowDropDownLine className="vacancy-type-arrow" />
                ) : (
                  <RiArrowDropRightLine className="vacancy-type-arrow" />
                )}
                <p>Department</p>
              </div>
              {toggleDepartment && (
                <ul className="filter-list">
                  {departments.map((dept) => (
                    <li key={dept}>
                      <input type="checkbox" id={`dept-${dept}`} />
                      <label htmlFor={`dept-${dept}`}>{dept}</label>
                    </li>
                  ))}
                </ul>
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
