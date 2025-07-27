import CommonForm from "@/components/common-form"
import { signInFormControls } from "@/config"
import { useForm } from "react-hook-form"

function SignIn()
{
    const formData = useForm({
        email :'',
        password :''
    })

    function handleSubmit(){

    }

    return <div>
            <CommonForm
                btnText={'Sign In'}
                handleSubmit={handleSubmit}
                formControls={signInFormControls}
                form={formData}
            />
    </div>

}

export default SignIn

