import React from 'react'
import Input from '../pages/Input'
import { useFormik } from "formik"
import { registerSchema } from '../validation/Validation';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {
    const initialValues = {
        userName:'',
        email:'',
        password:'',
        image:'',
    }
    
    const onSubmit = async users=>{
        const formData = new FormData();

        formData.append("userName",users.userName);
        formData.append("email",users.email);
        formData.append("password",users.password);
        formData.append("image",users.image);
        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData);
        
        if(data.message == "success"){
            toast('You have Registed Successfully', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }
    }

    const formik = useFormik({
        initialValues,  
        onSubmit,
        validationSchema:registerSchema,
    });
    
    const handelFieldChange =(event)=>{
        console.log(event);
        formik.setFieldValue("image",event.target.files[0]);
    }

    const inputs = [
        {
            id:"username",
            type:"text",
            name:"userName",
            title:"Username",
            value:formik.values.userName,
        },
        {
            id:"email",
            type:"email",
            name:"email",
            title:"Email",
            value:formik.values.email,
        },
        {
            id:"password",
            type:"password",
            name:"password",
            title:"Password",
            value:formik.values.password,
        },
        {
            id:"image",
            type:"file",
            name:"image",
            title:"User Image",
            onChange:handelFieldChange,
        }
    ]

    // payload : data inside API

    const renderInput = inputs.map((input,index)=>
                <Input id={input.id} type={input.type} name={input.name}
                title={input.title} key={index} onChange={input.onChange || formik.handleChange}
                value={input.value} errors={formik.touched[input.name] && formik.errors} onTouchError={formik.setFieldTouched}
                 />
    )
    
  return (
    <>
        <div className='container register'>
            <div className='register-form'>
                <h2>Create account</h2>
                <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                    {renderInput}
                    <button type="submit" className='py-2 w-25 m-auto' disabled={formik.disabled}>Regist Now</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Register;


// validate:values=>{
        //     let errors={};

        //     if(!values.userName){
        //         errors.userName = "Username is required";
        //     }
        //     if(!values.email){
        //         errors.email = "email is required";
        //     }
        //     if(!values.password){
        //         errors.password = "password is required";
        //     }
        //     return errors;
        // }