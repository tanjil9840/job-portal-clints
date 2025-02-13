import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs,setJobs]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>{
             setJobs(data);
        })

    },[])
    return (
        <div>
            <div className=' gap-4 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ' >
                {jobs.map(job=><HotJobsCard key={job._id} job={job} > </HotJobsCard>)}
            </div>
        </div>
    );
};

export default HotJobs;