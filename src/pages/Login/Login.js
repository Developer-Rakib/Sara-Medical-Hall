import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Bounce } from 'react-reveal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import { auth } from '../../firebase.init';
import Loading from '../SharedPage/Loading/Loading';
import SocialLogin from '../SharedPage/SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState({ value: "", error: "" });
    const [pass, setPass] = useState({ value: "", error: "" });
    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword, user, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    const hadnleLogIn = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(email.value, pass.value)

    }


    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            toast.success("Login Successfull!", { id: "signin" })
        }
    }, [user])

    useEffect(() => {
        if (error) {
            console.log(error.code);
            switch (error.code) {
                case "auth/wrong-password":
                    toast.error('Password is Wrong!', { id: "signup" })
                    break;
                case "auth/too-many-requests":
                    toast.error('Too Many Requests!', { id: "signup" })
                    break;
                case "auth/user-not-found":
                    toast.error('User Not Available, Please Sign Up!', { id: "signup" })
                    break;

                default:
                    toast.error('Somting is wrong', { id: "signup" })
                    break;
            }
        }
    }, [error])


    const handleForgetPass = () => {
        // console.log(email.value);
        sendPasswordResetEmail(auth, email.value)
            .then(() => {
                toast.success('Mail Sent!', { id: "signup" })
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode == "auth/missing-email") {
                    toast.error('Please Enter Email', { id: "signup" })
                    console.log(errorCode);
                }
            });

    }
    const hndleEmail = (event) => {
        setEmail({ value: event.target.value, error: "" })
    }
    const hndlePass = (event) => {
        setPass({ value: event.target.value, error: "" })
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <Bounce top>
            <div className='SignIn-container'>
                <div className="SignIn">
                    <div className="box">
                        <div className="form">
                            <h1>Login Form</h1>

                            <form onSubmit={hadnleLogIn}>
                                <div className='input-container'>
                                    <input onBlur={hndleEmail} type="email" name="email" placeholder="Enter Your Email" id="" required />

                                </div>
                                <div className='input-container'>
                                    <input onBlur={hndlePass} type="password" name="password" placeholder="Enter Your Password" id="" required />
                                </div>
                                <div className='input-container'>
                                    <input type="submit" value="Login" />
                                </div>
                            </form>
                            <p>Forgot Password? <button className='forgot' onClick={handleForgetPass}>Click Here</button></p>
                            <p>Dont have an account ? <Link to={"/signUp"}>Sign Up</Link></p>
                        </div>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </Bounce>
    );
};

export default Login;