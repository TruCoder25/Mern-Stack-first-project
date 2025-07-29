import CommonForm from "@/components/common-form"
import { signUpFormControls } from "@/config"
import { useToast } from "@/hooks/use-toast";
import { callRegisterUserApi } from "@/services";
import { get, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

function SignUp()
{
    const formData = useForm({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    });

    const{toast} = useToast()
    const navigate = useNavigate();

    async function handleSubmit(getData)
    {
        console.log("Form submitted with:", getData);

        const data = await callRegisterUserApi(getData)

        console.log(data);

        if(data?.success)
        {
            toast({
                title : 'User Register Successfull',
                description  : 'welcome'
            })
            navigate('/tasks/list');
        }
        else{
            toast({
                title : 'Error',
                description : 'Some error Occuerd'
            })
        }
        
    }
    return <div>
       
        
        <CommonForm 
            formControls={signUpFormControls}
            btnText = {'SignUp'}
            form={formData}
            handleSubmit={handleSubmit}
        />
    </div>

}

export default SignUp

