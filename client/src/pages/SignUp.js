import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import "./login1.css"

const SignUp = () => {
  const { register, handleSubmit ,reset } = useForm();
  const navigate = useNavigate();

  const signUpUser = async (data) => {
    try {
      console.log(data.email);
      console.log(data.password);

      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/signUp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log("outside the request",data.email);
      
      if (!response.ok) {
        // Handle signup failure
        const errorData = await response.json();
        console.error('Signup error:', errorData); // Add this line for debugging
        toast.error(errorData.message, { position: toast.POSITION.BOTTOM_RIGHT });
        return;
      }

      // Signup successful
      const successData = await response.json();
      console.log('Signup success:', successData); // Add this line for debugging
      toast.success(successData.message, {
        // position: toast.POSITION.TOP_RIGHT,
      });

      // Redirect to login page
      setTimeout(() => reset(), 10000);
      navigate('/login');
    } catch (error) {
      console.log('Error during signup:', error);
      // Show an error toast
      toast.error('Signup failed. Please try again.', {
        // position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div class="container1 pt-7">
      <div className="w-[100%] z-20">
        <Navbar />
      </div>
      <div class="container2 shadow-2xl shadow-slate-950  ">
        <form onSubmit={handleSubmit(signUpUser)}>
          <div class="title">Sign Up</div>
          <div class="input-box underline">
            <input type="text" placeholder="Name" {...register('name')} />
            <div class="underline"></div>
          </div>
          <div class="input-box underline">
            <input type="email" placeholder="Email" {...register('email')} />
            <div class="underline"></div>
          </div>
          <div class="input-box underline">
            <input type="text" placeholder="Role" {...register('role')} />
            <div class="underline"></div>
          </div>
          <div class="input-box underline">
            <input type="password" placeholder="Password" {...register('password')} />
            <div class="underline"></div>
          </div>
          <div class="input-box button">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className="signup flex flex-col items-center">
          <p>OR</p>
          <p>Already Have an Account</p><div class="sign"></div>
        </div>
        <div className="input-box mt-2">
          <NavLink to='/login'>
            <div className="h-[50px]">
              <button>
                Login
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>



  //   <div class="container1 pt-7">
  //   <div className="w-[100%] z-20">
  //     <Navbar />
  //   </div>
  //   <div class="container2">
  //     <form onSubmit={handleSubmit(signUpUser)} action="">
  //       <div class="title">Sign Up</div>
  //       <div class="input-box underline">
  //         <input type="text" placeholder="Enter Your Name" required />
  //         <div class="underline"></div>
  //       </div>
  //       <div class="input-box underline">
  //         <input type="text" placeholder="Enter Your Email" required />
  //         <div class="underline"></div>
  //       </div>
  //       <div class="input-box underline">
  //         <input type="tel" maxlength="10" placeholder="Enter Your Mobile no." required />
  //         <div class="underline"></div>
  //       </div>
  //       <div class="input-box underline">
  //         <input type="password" placeholder="Enter Password" required />
  //         <div class="underline"></div>
  //       </div>
  //       <div class="input-box">
  //         <input type="password" placeholder="Confirm Password" required />
  //         <div class="underline"></div>
  //       </div>
  //       <div class="input-box button">
  //         <input type="submit" name="" value="Submit" />
  //       </div>
  //     </form>
  //     <div className="flex flex-col items-center">
  //       <p>OR</p>
  //     </div>
  //     <div className="input-box mt-2">

  //       <NavLink to='/Login'>

  //         <div className="h-[50px]">
  //           <button >
  //             Login
  //           </button>
  //         </div>
  //       </NavLink>
  //     </div>
  //   </div>
  // </div>
  );
}

export default SignUp;
