import { createContext, useState } from "react";


export const AppContext = createContext();

function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const[isLogin,setIsLogin] = useState(false);
    const[isuploadClicked,setisuploadClicked]=useState(false);

  const [image, setImage] = useState('');


    const value = {
        isLogin,
        setIsLogin,
        isuploadClicked,
        setisuploadClicked,
        image, 
        setImage
    }

    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;