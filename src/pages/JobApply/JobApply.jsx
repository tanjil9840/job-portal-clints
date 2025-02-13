import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams()
    const {user}=useAuth()
    const navigate= useNavigate()
    // console.log(id, user)
    const submitJobApplication = e => {
        e.preventDefault()
        const from = e.target;
        const linkdin = from.linkdin.value;
        const github = from.github.value;
        const resume = from.resume.value;
        // console.log(linkdin, github, resume)
        const jobApplication={
            job_id: id,
            applicant_email: user.email,
            linkdin,
            github,
            resume,
        }
        fetch('http://localhost:5000/job-application',{
            method:"POST",
            headers:{ 
                'content-type': 'application/json'
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your application successfull",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myApplications')
                


            }
        })
    }
    return (


        <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">

            <div className="card-body w-full ">
                <h1 className="text-5xl  font-bold text-center">Apply Job and GoodLuck </h1>
                <form onSubmit={submitJobApplication} >
                    <fieldset className="fieldset">
                        <label className="fieldset-label">LinkedIn url </label>
                        <input type="url" name='linkdin' className="input" placeholder="Linkdin Url " />
                        <label className="fieldset-label">GitHub </label>
                        <input type="url" name='github' className="input" placeholder="Github Url" />

                        <label className="fieldset-label">Resume url </label>
                        <input type="url" name='resume' className="input" placeholder="Resume Url " />

                        <button className="btn btn-neutral mt-4">Apply</button>
                    </fieldset>
                </form>
            </div>
        </div>


    );
};

export default JobApply;