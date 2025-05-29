import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    company_logo,
    title,
    location,
    jobType,
    _id,
    salaryRange,
    requirements,
    description,
    company,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="flex gap-2 items-center">
            <IoLocationSharp />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{jobType}</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((req, index) => (
            <div key={index} className="badge badge-outline">
              {req}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
