import CommonForm from "@/components/common/Form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState={
    email: '',
    password: ''
}

function AuthLogin(){
    const [formData, setFormData] = useState(initialState);

    function onsubmit(){
        
    }

    return(
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Sing in to your account</h1>
                <p>Dont have an account 
                <Link className='font-medium ml-2 text-primary hover:underline' to='/auth/register'>Register</Link>
                </p>
            </div>
            <CommonForm
               formControls={loginFormControls}
               buttonText={'Sign In'}
               formData={formData}
               setFormData={setFormData}
               onSubmit={onsubmit}
            />
        </div>
    )
}
export default AuthLogin;