import { Link as button, NavLink, useNavigate } from 'react-router-dom';
import "./Header.css"
import openNav from '../../../img/openNav.png'
import closeNav from '../../../img/close.png'
import { useContext, useState } from 'react';
import auth from '../../../firebase.init.js';
// import { auth } from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import { DisplyNameContext } from '../../../App';


const Header = () => {
    let [toggle, setToggle] = useState(false);
    // const [displyName, setDisplyName] = useContext(DisplyNameContext)

    let [user] = useAuthState(auth)
    let navigat = useNavigate();

    console.log(user);
    console.log(user?.displayName);

    const navBtnHndle = () => {
        setToggle(!toggle)
    }
    // const handleLogout = () => {
    //     signOut(auth).then(() => {
    //         toast.success('Logged Out!', { id: "logOut" })
    //         navigat("/login")

    //     }).catch((error) => {
    //         console.log(error.message);
    //     });

    // };

    return (
        <div className='header-container pt-4 pb-10 nav flex justify-around'>
            <div className="logo">
                <h2 className="text-5xl">Logo</h2>
            </div>
            <nav className=''>
                <img onClick={navBtnHndle} className='sm:hidden absolute right-8 top-6' width={25} src={toggle ? closeNav : openNav} alt="" />
                <ul className={`flex flex-col sm:flex-row absolute left-0 justify-center sm:relative sm:opacity-100 sm:top-0 bg-white w-full py-2 duration-500 ease-out ${toggle ? "top-12 opacity-100" : "top-[-250px] opacity-0"}`}>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/"}>HOME</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/blogs"}>BLOGS</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/about"}>ABOUT</NavLink>
                    {
                        !user && <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/login"}>Login</NavLink>
                    }
                </ul>
                {
                    // user &&

                    // <div className="user flex items-center">
                    //     <img src={user.photoURL ? user.photoURL : "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"} alt="" />
                    //     <p>{user?.displayName}</p>
                    //     <button onClick={handleLogout}>LogOut</button>
                    // </div>

                }
            </nav>
        </div >
    );
}

export default Header;