import { Link as button, NavLink, useNavigate } from 'react-router-dom';
import "./Header.css"
import { useContext, useState } from 'react';
import auth from '../../../firebase.init.js';
import { GoThreeBars } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import { DisplyNameContext } from '../../../App';


const Header = () => {
    let [toggle, setToggle] = useState(false);
    // const [displyName, setDisplyName] = useContext(DisplyNameContext)

    let [user] = useAuthState(auth)
    let navigat = useNavigate();

    // console.log(user);
    // console.log(user?.photoURL);



    const navBtnHndle = () => {
        setToggle(!toggle)
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            toast.success('Logged Out!', { id: "logOut" })
            navigat("/login")

        }).catch((error) => {
            console.log(error.message);
        });

    };

    return (
        <div className='header-container z-10 sticky sm:pt-3 sm:pb-4  nav flex px-5 md:px-10 lg:px-20 justify-between items-center'>
            <div className="logo">
                <h2 className="text-2xl lg:text-4xl sm:mt-3">Sara Medical Hall</h2>
            </div>
            <nav onClick={() => setToggle(!toggle)}>
                <span onClick={navBtnHndle} className='sm:hidden absolute right-8 top-5'>{toggle ? <GrClose></GrClose> : <GoThreeBars></GoThreeBars>}</span>
                <ul className={`flex flex-col sm:flex-row absolute left-0 justify-center sm:relative sm:opacity-100 sm:top-0 bg-white sm:bg-inherit w-full py-2 duration-500 ease-out ${toggle ? "top-12 opacity-100" : "top-[-250px] opacity-0"}`}>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/home"}>HOME</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/blog"}>BLOGS</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/about"}>ABOUT</NavLink>
                    {user ?
                        <div className="user flex items-center">
                            <img src={user.photoURL ? user.photoURL : "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"} alt="" />
                            <p>{user?.displayName}</p>
                            <button onClick={handleLogout}>LogOut</button>
                        </div>
                        :
                        <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/login"}>Login</NavLink>}
                </ul>

            </nav>
        </div >
    );
};

export default Header;