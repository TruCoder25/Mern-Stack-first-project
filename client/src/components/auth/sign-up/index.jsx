import CommonForm from "@/components/common-form"
import { signUpFormControls } from "@/config"
import { useForm } from "react-hook-form"

function SignUp()
{
    const form = useForm({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    });

    function handleSubmit()
    {

    }
    return <div>
       
        
        <CommonForm 
            formControls={signUpFormControls}
            btnText = {'SignUp'}
            form={form}
            handleSubmit={handleSubmit}
        />
    </div>

}

export default SignUp

