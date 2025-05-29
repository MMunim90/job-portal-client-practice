import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job =useLoaderData();

    const {company_logo,
    title,
    location,
    jobType,
    category,
    _id,
    salaryRange,
    requirements,
    description,
    company} = job;
    return (
        <div>
            <h3 className="text-6xl">Job Details of: {title}</h3>
            <p>Company: {company}</p>
            <img src={company_logo} alt="" />
            <Link to={`/jobApply/${_id}`}><button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;