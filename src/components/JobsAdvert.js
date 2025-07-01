import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/JobsAdvert.css';
import vacancy from './data/vacancy';

const JobsAdvert = () => (
  <div className="job-container">
    {vacancy.map((item) => (
      <div key={item.id} className="job-card">
        <div className="job-header">
          <Link to="/jobDetails" className="job-title">
            <h2>{item.JobTitle}</h2>
          </Link>
          <p className="date-posted">
            <strong>Date Posted: </strong>
            {item.PostingDate}
          </p>
        </div>

        <div className="job-description">
          <p>
            {item.Description}

            <Link to="/jobDetails" className="read-more">
              Read more
            </Link>
          </p>
        </div>

        <div className="job-details">
          <div>
            <p>
              <strong>Closing Date:</strong>
              {' '}
              {item.ClosingDate}
            </p>
            <p>
              <strong>Type:</strong>
              {item.Type}
            </p>
            <p>
              <strong>Location:</strong>
              {' '}
              {item.Location}
            </p>
            <p>
              <strong>Department:</strong>
              {' '}
              {item.Departmet}
            </p>
          </div>
          <button type="button" className="apply-btn">
            Apply
          </button>
        </div>
      </div>
    ))}
  </div>
);
export default JobsAdvert;
