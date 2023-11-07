import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    // const auth = getAuth();
    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const [registerError, setRegisterError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        //reset error
        setRegisterError('');

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            toast("Login by Email & Password Successful");
            e.target.reset();
            // navigate('/');
            setTimeout(() => {
                navigate('/');
            }, 3000);
            // if(result.user.emailVerified){
            //     setSuccess('User Logged in successfully')
            // } else {
            //     alert('Please verify your your Email address')
            // }
        })
        .catch(error => {
            console.error(error)
            setRegisterError(error.message);
        })
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            // console.log(result.user);
            toast("Login by Google Successful");
            // navigate('/');
            setTimeout(() => {
                navigate('/');
            }, 3000);
        })
        .catch(error => {
            console.error(error)
            setRegisterError(error.message);
        })
    }

    // const handleForgetPassword = () => {
    //     const email = emailRef.current.value;
    //     if(!email){
    //         console.log('Send reset Email', emailRef.current.value);
    //         return;
    //     } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
    //         console.log('Please write a valid email address.');
    //         return;
    //     }

    //     //Send validation  email
    //     sendPasswordResetEmail(auth, email)
    //     .then(() => {
    //         alert('Please check your Email.');
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
        
    // }

    return (
        <div className="hero min-h-screen">
            <Helmet>
                <title>Login | Event Management</title>
            </Helmet>
            <div className="hero-content flex-col">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white">Login now!</h1>
                <p className="py-6 text-white">Login Authentication with firebase by Email And Password</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" ref={emailRef} required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                            {/* <label className="label">
                            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-emerald-300 text-white">Login</button>
                        </div>
                    </form>
                    <ToastContainer className="mt-32"/>
                    {
                        registerError && <p className="text-red-600">{registerError}</p>
                    }
                    <p className="text-black">New here? Please <Link to="/register"><button className="btn bg-cyan-400 btn-sm text-white">Register</button></Link></p>
                    <div className="px-6 sm:px-0 max-w-sm">
                        <button onClick={handleGoogleSignIn} type="button" className="text-black w-f1/2 btn-ghost font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2 border border-gray-950"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;