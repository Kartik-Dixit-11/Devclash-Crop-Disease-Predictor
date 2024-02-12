import { AppContext } from "../Context/AppContext";
import Login from "./Login";
import SignUp from "./SignUp";
import { useContext } from "react";



const Contact = () =>{

    const { isLogin,setIsLogin } = useContext(AppContext)
   return(
    <div>
        {
            isLogin ? <Login/> :<SignUp/>
        }
    </div>
   )

}

export default Contact;