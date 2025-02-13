import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const  { _id, title,company ,deadline } = useLoaderData()
    
    return (
        <div>
            <h2>Hob Details {title} </h2>
            <h3> {company} </h3>
            <h4>deadline: {deadline} </h4>
            <Link to= {`/jobApply/${_id}`}> <button className='btn btn-primary' > Apply now </button> </Link>
        </div>
    );
};

export default JobDetails;