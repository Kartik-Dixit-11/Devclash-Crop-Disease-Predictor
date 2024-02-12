import { AppContext } from "../Context/AppContext";
import { NavLink, useNavigate,Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios"
import "./login1.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
const Login = () => {

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/');
//   }


  // const { register, handleSubmit } = useForm();
  // const navigate = useNavigate();

//   const createAccount = async (data) => {

//     const savedUserResponse = await fetch(
//       `${process.env.REACT_APP_BASE_URL}/login`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...data }),
//       }
//     );

//     console.log("FORM RESPONSE......", savedUserResponse);

//     navigate("/")
//   };



// const history=useNavigate();

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')


// async function submit(e){
//     e.preventDefault();

//     try{

//         await axios.post("http://localhost:3000/app/v1/login",{
//             email,password
//         })
//         .then(res=>{
//             if(res.data=="exist"){
//                 history("/home",{state:{id:email}})
//             }
//             else if(res.data=="notexist"){
//                 alert("User have not sign up")
//             }
//         })
//         .catch(e=>{
//             // alert("wrong details")
//             // console.log(e);
//         })

//     }
//     catch(e){
//         console.log(e);

//     }

// }

const { register, handleSubmit ,reset } = useForm();
const navigate = useNavigate();


const successData = async (data) => {
try {
  // console.log(email);
  // console.log(password);
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  // console.log(email);
  // console.log(password);
  if (!response.ok) {
    // Handle signup failure
    const errorData = await response.json();
    console.error('Login error:', errorData); // Add this line for debugging
    toast.error(errorData.message/*, { position: toast.POSITION.BOTTOM_RIGHT }*/);
    return;
  }

  // Signup successful
  const successData = response.json();
  console.log('Login success:', successData); // Add this line for debugging
  toast("Login Successfull"/*, {
    position: toast.POSITION.TOP_RIGHT
  }*/);

  // Redirect to login page
  setTimeout(() => reset(), 10000);
   navigate('/login');
} 
catch (error) {
  console.log('Error during signup:', error);
  // Show an error toast
  toast.error('Signup failed. Please try again.'/*, {
     position: toast.POSITION.TOP_RIGHT
  }*/);
}
navigate("/")
};

  return (
    <div class="container1 min-h-screen ">
      <Navbar/>
      <div class="container2 shadow-2xl shadow-slate-950 ">
        <form onSubmit={handleSubmit(successData)}>
          <div class="title">Login</div>
          <div class="input-box underline">
          <input type="email" /*onChange={(e) => { setName(e.target.value) }}*/ placeholder="Email" {...register('email') }/>            <div class="underline"></div>
          </div>
          <div class="input-box">
          <input type="password" /*onChange={(e) => { setPassword(e.target.value) }} */ placeholder="Password" {...register('password') } />
            <div class="underline"></div>
          </div>


          <div class="input-box button">
            <input type="submit" /*onClick={submit}*/ name="" value="Login"></input>
          </div>
        </form>

        <div className="signup flex flex-col items-center">
          <p>OR</p>
          <p>Don't Have an Account</p><div class="sign"></div>
        </div>



        <div class="input-box">

          <NavLink to='/SignUp'>

            <div className=" h-[50px]">
              <button>
                SignUp
              </button>
            </div>
          </NavLink>
        </div>
      </div>

      <ToastContainer className="toast-position"
        position="top-center" />

    </div>






  //   <div class="container1 min-h-screen">
  //   <Navbar/>
  //   <div class="container2 ">
  //     <form onSubmit={handleSubmit} action="#">
  //       <div class="title">Login</div>
  //       <div class="input-box underline">
  //         <input type="text" placeholder="Enter Your Email" required />
  //         <div class="underline"></div>
  //       </div>
  //       <div class="input-box">
  //         <input type="password" placeholder="Enter Your Password" required />
  //         <div class="underline"></div>
  //       </div>


  //       <div class="input-box button">
  //         <input type="submit" name="" value="Login"></input>
  //       </div>
  //     </form>

  //     <div className="signup flex flex-col items-center">
  //       <p>OR</p>
  //       <p>Don't Have an Account</p><div class="sign"></div>
  //     </div>



  //     <div class="input-box">

  //       <NavLink to='/SignUp'>

  //         <div className=" h-[50px]">
  //           <button>
  //             SignUp
  //           </button>
  //         </div>
  //       </NavLink>
  //     </div>
  //   </div>



  // </div>

  )
}

export default Login;