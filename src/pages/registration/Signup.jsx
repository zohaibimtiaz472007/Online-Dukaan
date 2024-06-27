/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from '../../components/loader/Loader'


const Signup = () => {
    const context = useContext(myContext)
    const{loading, setLoading} = context;

    const navigate = useNavigate()


    const[userSignup, setUserSignup] = useState({
        name: '',
        email: '',
        password: "",
        role: 'user'
    })


    const userSignupFunction = async () =>{
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            return toast.error("All Fields Required") 
        }
        setLoading(true)
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password)
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }
            const userRefrence = collection(fireDB, 'user')
            addDoc(userRefrence, user)
            setUserSignup({
                name : '',
                email : '',
                password : ''
            });

            toast.success("SignUp Successfully")
            setLoading(false)
            navigate('/login')

            
        } catch (error) {
            console.log(error);
            setLoading(false);                        
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
            {loading && <Loader/>}
            {/* Login Form  */}
            <div className="login_Form bg-white bg-opacity-60 px-1 lg:px-8 py-6 border border-white backdrop-filter backdrop-blur-lg rounded-xl shadow-lg">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-3xl font-extrabold text-white'>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        value={userSignup.name}
                        onChange={(e)=>{setUserSignup({
                            ...userSignup,
                            name : e.target.value
                        })}}
                        placeholder='Full Name'
                        className='bg-transparent border border-white bg-opacity-30 px-2 py-2 w-96 rounded-md outline-none placeholder-white text-white'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        value={userSignup.email}
                        onChange={(e)=>{setUserSignup({
                            ...userSignup,
                            email : e.target.value
                        })}}
                        placeholder='Email Address'
                        className='bg-transparent border border-white bg-opacity-30 px-2 py-2 w-96 rounded-md outline-none placeholder-white text-white'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        value={userSignup.password}
                        onChange={(e)=>{setUserSignup({
                            ...userSignup,
                            password : e.target.value
                        })}}
                        placeholder='Password'
                        className='bg-transparent border border-white bg-opacity-30 px-2 py-2 w-96 rounded-md outline-none placeholder-white text-white'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        onClick={userSignupFunction}
                        type='button'
                        className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full text-white text-center py-2 font-bold rounded-md transition duration-300 ease-in-out transform hover:scale-105'
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-white'>Have an account? <Link  className='text-white font-bold underline hover:text-pink-300 transition duration-300' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;
