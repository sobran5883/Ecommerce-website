import CommonForm from "@/components/common/Form";
// import { useToast } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast"
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState={
    userName: '',
    email: '',
    password: ''
}

function AuthRegister(){
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {toast} = useToast();

    function onsubmit(event){ 
        event.preventDefault();
        dispatch(registerUser(formData)).then((data)=>{
            if(data?.payload?.success){
                toast({
                    title: data?.payload?.message,
                })
                navigate('/auth/login'); 
            }
            else{
                toast({
                    title: data?.payload?.message,
                    variant: "destructive",
                })
            }
        });
    }
    console.log(formData);

    return(
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
                <p>Already have an account 
                <Link className='font-medium ml-2 text-primary hover:underline' to='/auth/login'>Login</Link>
                </p>
            </div>
            <CommonForm
               formControls={registerFormControls}
               buttonText={'Sign up'}
               formData={formData}
               setFormData={setFormData}
               onSubmit={onsubmit}
            />
        </div>
    )
}
export default AuthRegister;