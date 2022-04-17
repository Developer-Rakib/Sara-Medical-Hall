import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigat = useNavigate()

    useEffect(() => {
        if (error) {
            console.log(error.code);
            switch (error.code) {
                case "auth/popup-closed-by-user":
                    toast.error('Login canceled by User!', { id: "social_login" })
                    break;
                case "invalid-email":
                    toast.error('invalid-email!', { id: "social_login" })
                    break;

                default:
                    toast.error('Somting is wrong', { id: "social_login" })
                    break;
            }
        }
    }, [error])

    useEffect(() => {
        if (user) {
            console.log(user);
            toast.success('SignUp Successfully!', { id: "social_login" })
            navigat('/')
        }
    }, [user])


    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(() => {

            })

    }


    return (
        <div>
            <div className='flex justify-center items-center py-2'>
                <div className='w-32 bg-gray-400' style={{ height: '2px' }}></div>
                <p className='px-2'>or</p>
                <div className='w-32 bg-gray-400' style={{ height: '2px' }}></div>
            </div>
            <div className='flex justify-center'>
                <button onClick={handleGoogleSignin} className='flex items-center'> <span className="mx-1">Login with</span> <FcGoogle></FcGoogle></button>
            </div>

        </div>
    );
};

export default SocialLogin;