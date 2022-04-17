import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import toast from 'react-hot-toast';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../SharedPage/Loading/Loading';
import auth from '../../firebase.init';
import { DisplyNameContext } from '../../App';
import SocialLogin from '../SharedPage/SocialLogin/SocialLogin';

const SignUp = () => {
    const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [pass, setPass] = useState({ value: "", error: "" });
    const [conPass, setConPass] = useState({ value: "", error: "" });
    const [displyName, setDisplyName] = useContext(DisplyNameContext)

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, UpError] = useUpdateProfile(auth);
    const navigat = useNavigate();


    useEffect(() => {
        if (user) {
            // console.log(user);
            toast.success('SignUp Successfully!', { id: "signup" })
            navigat('/')
        }
    }, [user])

    useEffect(() => {
        if (error) {
            console.log(error.code);
            switch (error.code) {
                case "auth/email-already-in-use":
                    toast.error('Email Aleady Exist!', { id: "signup" })
                    break;
                case "invalid-email":
                    toast.error('invalid-email!', { id: "signup" })
                    break;

                default:
                    toast.error('Somting is wrong', { id: "signup" })
                    break;
            }
        }
    }, [error])

    const handleSignUp = async (event) => {
        event.preventDefault();

        if (name.value == "") {
            setName({ value: "", error: "Name is Empty" })
        }
        if (pass.value == "") {
            setPass({ value: "", error: "Password is Empty" })
        }
        if (conPass.value == "") {
            setConPass({ value: "", error: "Confirm Password is Empty" })
        }
        if (email.value == "") {
            setEmail({ value: "", error: "Email is not valid" })
            return
        }


        await createUserWithEmailAndPassword(email.value, pass.value);
        await updateProfile({ displayName: name.value });
        setDisplyName(name.value)

    }

    const handleName = (event) => {
        if (event.target.value == "") {
            setName({ value: "", error: "Name is Empty" })
        } else {
            setName({ value: event.target.value, error: "" })
        }

    }
    const handleEmail = (event) => {
        if (event.target.value == "") {
            setEmail({ value: "", error: "Email is Empty" })
        } else if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(event.target.value)) {
            setEmail({ value: "", error: "Email is not valid" })
        }
        else {
            setEmail({ value: event.target.value, error: "" })
        }
    }
    const handlePass = (event) => {
        if (event.target.value === "") {
            setPass({ value: "", error: "Password is Empty" })
        } else if (event.target.value.length < 7) {
            setPass({ value: "", error: "Password is to Sort, Must be 6 digit" })
        }
        else {
            setPass({ value: event.target.value, error: "" })
        }

    }
    const handleConfrmPass = (event) => {
        if (event.target.value === "") {
            setConPass({ value: "", error: "Confirm Password is Empty" })
        } else if (event.target.value !== pass.value) {
            setConPass({ value: "", error: "Confirm Password is Miss Match" })
        } else {
            setConPass({ value: event.target.value, error: "" })
        }
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='SignIn-container'>
            <div className="SignIn pt-8 pb-8">
                <div className="box">
                    <div className="form">
                        <h1>Sign Up Form</h1>

                        <form onSubmit={handleSignUp}>
                            <div className='input-container'>
                                <input onBlur={handleName} type="displayName" name="displayName" placeholder="Enter Your Name" id="" />
                                <p className='error'>{name.error}</p>
                            </div>
                            <div className='input-container'>
                                <input onBlur={handleEmail} type="text" name="email" placeholder="Enter Your Email" id="" />
                                <p className='error'>{email.error}</p>
                            </div>
                            <div className='input-container'>
                                <input onBlur={handlePass} type="password" name="password" placeholder="Enter Your Password" id="" />
                                <p className='error'>{pass.error}</p>
                            </div>

                            <div className='input-container'>
                                <input onBlur={handleConfrmPass} type="password" name="confirmPassword" placeholder="Enter Your Confirm Password" id="" />
                                <p className='error'>{conPass.error}</p>
                            </div>
                            <div className='input-container'>
                                <input type="submit" value="Sign up" />
                            </div>
                            <p>You already have an account ? <Link to={"/login"}>Login</Link></p>
                        </form>
                    </div>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default SignUp;