import { p } from 'motion/react-client';
import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const HotJobsCard = ({job}) => {
    const { _id,title, company, company_logo, location,category,salaryRange,   requirements, description }=job
    return (
        <div className="card bg-base-100  shadow-sm">
 <div className='flex gap-2 pt-2 m-2 '  >
 <figure>
    <img className='w-16'
      src= {company_logo} />
  </figure>
  <div>
    <h3>{company}</h3>
    <p className='flex gap-1 items-center' > < IoLocationSharp> </IoLocationSharp>  {location} </p>
  </div>
 </div>
  <div className="card-body">
    <h2 className="card-title"> {title} 
    <div className="badge badge-secondary">NEW</div> </h2>
    <p> {description} </p>
    <div className='flex gap-2 flex-wrap ' >
        { requirements.map((skill, index)=> <p  key={index}
         className='border rounded-md text-center  px-2 py-1 hover:text-purple-600 hover:bg-gray-400 '
         > {skill} </p>  ) }
    </div>
    <div className="card-actions justify-center">
        <p className='flex items-center gap-1' >Salary:  <BsCurrencyDollar className='text-xl' > </BsCurrencyDollar> {salaryRange.min}- {salaryRange.max} {salaryRange.currency} </p>
         <Link to={`/jobs/${_id}`} >    <button className="btn btn-primary">Apply </button> </Link>
    </div>
  </div>
</div>
    );
};

export default HotJobsCard;