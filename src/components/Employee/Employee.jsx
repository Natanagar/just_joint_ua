import React from 'react';
import { jobs } from '../Data/index';
// import { MapLeaflet } from '../Map/Map';

export const Employee = () => {
  console.log(jobs.map(item => console.log(item)));
  return (
    <div>
      <div className="jobs">
        {jobs.map((item, index) => (
          <section key={index}>
            <span>{item.position}</span>
            <span>{item.city}</span>
            <span>{item.company}</span>
            <span>{item.address}</span>

          </section>
        ))}
      </div>

    </div>
  );
};
