import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";
// import { sendEmailVerification, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    // console.log(authInfo);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo_URL = e.target.photo_url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const accepted = e.target.terms.checked;
        // console.log(name, email, password, accepted)

        //reset error
        setRegisterError('');
        //reset success
        setSuccess('');

        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        } else if(!/[A-Z]/.test(password) ) {
            setRegisterError('Your Password should have at least one Uppercase characters.');
            return; 
        } else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]/.test(password) ) {
            setRegisterError('Your Password should have at least one Special characters.');
            return;
        } 
        // else if(!accepted) {
        //     setRegisterError('Please accept our Terms & Conditions');
        //     return;
        // }

        //create user in firebase
        createUser(email, password)
        .then(result => {
            //console.log(result.user);
            const user = { email };
            // send data to the server
            fetch('https://m10a-brand-shop-server-283gyzcf7-dipuhaiders-projects.vercel.app/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully to the database',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


            toast("Registration Successful");
            setSuccess(`User: ${email} created successfully`);

            // update profile
            updateProfile(result.user, {
                displayName: name, photoURL: photo_URL
                }).then(() => {
                    //console.log('Profile Updated');
                    // navigate('/');
                    setTimeout(() => {
                        navigate('/');
                    }, 3000);
                }).catch(error => {
                    console.error(error)
            });
            

            //send verification email
            // sendEmailVerification(result.user)
            // .then(() => {
            //     alert('Please check your Email and verify your account.')
            // })
        })
        .catch(error => {
            console.error(error)
            setRegisterError(error.message);
        })

    }

    return (
        <div className="hero min-h-screen">
            <Helmet>
                <title>Register | Event Management</title>
            </Helmet>
            <div className="hero-content flex-col">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white">Register now!</h1>
                <p className="py-6 text-white">Register Authentication with firebase by Email And Password</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" required placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo_url" required placeholder="Place PhotoURL here" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" required placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>

                            <div className="relative">
                                <input type={ showPassword ? "text" : "password" } name="password" required placeholder="Password" className="input input-bordered w-full" />
                                <span className="absolute top-4 right-2" onClick={  () => setShowPassword(!showPassword)  }>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            {/* <br />
                            <div className="mb-2">
                                <input type="checkbox" name="terms" id="terms" />
                                <label className="ml-2 text-black" htmlFor="terms">Accept our <a href="">Terms & Conditions</a></label>
                            </div> */}
                            {/* <br />
                            <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-emerald-300 text-white">Register</button>
                        </div>
                    </form>
                    <ToastContainer className="mt-32"/>
                    {
                        registerError && <p className="text-red-600">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    <p className="text-black">Already Registered? <Link to="/login"><button className="btn bg-cyan-400 btn-sm text-white">Login</button></Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;