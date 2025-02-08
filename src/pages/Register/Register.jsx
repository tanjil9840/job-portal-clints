import Lottie from 'lottie-react';
import React from 'react';
import  registerLottieData from '../../assets/lottie/register.json'

const Register = () => {
  const handleRegister=e=>{
    e.preventDefault()
    const form= e.target 
    const email=form.email.value 
    const password=form.password.value 
    console.log(email, password)
  }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-96 lg:text-left">
      
    <Lottie animationData={registerLottieData} > </Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Register!</h1>
        <form  onSubmit={handleRegister} >
        <fieldset  className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;