import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SignIn = () => {
    const {signInUser}=useContext(AuthContext)
    const handleLogin=e=>{
        e.preventDefault()
        const form= e.target 
        const email=form.email.value 
        const password=form.password.value 
        console.log(email, password)
        signInUser(email,password)
        .then(result=>{
            console.log("SignIn", result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    
    
    }
       


    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-96 lg:text-left">
      
    {/* <Lottie animationData={registerLottieData} > </Lottie> */}
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">SignIn !</h1>
        <form  onSubmit={handleLogin} >
        <fieldset  className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;