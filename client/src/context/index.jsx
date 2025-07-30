import { callLoginUserApi, callUserAuthApi } from "@/services";
import { createContext ,useEffect,useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const TaskManagerContext = createContext(null);


function TaskManagerProvider({children}){

    const[user,setUser] = useState(null);

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        const verifyUserCookie = async()=>{
            const data  = await callUserAuthApi();
            
            console.log(data)

            if(data?.userInfo)
            {
                setUser(data?.userInfo)
            }

            return data?.success? navigate('/tasks/list') : navigate('/auth')
        }

        verifyUserCookie();

    },[navigate,location.pathname])
 
    

    return <TaskManagerContext.Provider value={{ user, setUser }} >{children}</TaskManagerContext.Provider>
}

export default TaskManagerProvider;
