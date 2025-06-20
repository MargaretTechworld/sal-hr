import React from 'react';
import '../styles/JobsAdvert.css';
import vacancy from './data/vacancy';

const JobsAdvert = () => (
  <div className="job-container">
    {vacancy.map((item) => (
      <div key={item.id} className="job-card">
        <div className="job-header">
          <a href="#" className="job-title">
            <h2>{item.JobTitle}</h2>
          </a>
          <p className="date-posted">
            <strong>Date Posted: </strong>
            {item.PostingDate}
          </p>
        </div>

        <div className="job-description">
          <p>
            {item.Description}
            <a href="#" className="read-more">
              Read more
            </a>
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
          <button type="button" className="apply-btn">Apply</button>
        </div>
      </div>
    ))}
  </div>
);
export default JobsAdvert;
