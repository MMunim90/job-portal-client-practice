import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import JobLists from './JobLists';
import { jobsCreatedByPromise } from '../../api/jobsApi';

const MyPostedJob = () => {
    const {user} = UseAuth();
    return (
        <div>
            <h3>My Posted Job: </h3>
            <Suspense>
                <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;