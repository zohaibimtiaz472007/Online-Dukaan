/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    /**========================================================================
     *                          User Login Function 
    *========================================================================**/

    const userLoginFunction = async () => {
        // validation 
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
            // console.log(users.user)

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user) )
                    setUserLogin({
                        email: "",
                        password: ""
                    })
                    toast.success("Login Successfully");
                    setLoading(false);
                    if(user.role === "user") {
                        navigate('/user-dashboard');
                    }else{
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }
    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500'>
            {loading && <Loader />}
            {/* Login Form  */}
            <div className="login_Form bg-white bg-opacity-60 px-1 lg:px-8 py-6 border border-white backdrop-filter backdrop-blur-lg rounded-xl shadow-lg">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-3xl font-extrabold text-white'>
                        Login
                    </h2>
                </div>

                {/* Input Email */}
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }}
                        placeholder='Email Address'
                        className='bg-transparent border border-white bg-opacity-30 px-2 py-2 w-96 rounded-md outline-none placeholder-white text-white'
                    />
                </div>

                {/* Input Password */}
                <div className="mb-5">
                    <input
                        type="password"
                        value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }}
                        placeholder='Password'
                        className='bg-transparent border border-white bg-opacity-30 px-2 py-2 w-96 rounded-md outline-none placeholder-white text-white'
                    />
                </div>

                {/* Login Button */}
                <div className="mb-5">
                    <button
                        onClick={userLoginFunction}
                        type='button'
                        className='bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 w-full text-white text-center py-2 font-bold rounded-md transition duration-300 ease-in-out transform hover:scale-105'
                    >
                        Login
                    </button>
                </div>

                <div>
                    <h2 className='text-white'>Don't Have an account? <Link className='text-white font-bold underline hover:text-indigo-300 transition duration-300' to={'/signup'}>Signup</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Login;
