import React, { useState } from "react";
import { EyeIcon } from "../icons/EyeIcon";
import { EyeSlashIcon } from "../icons/EyeSlashIcon";
import { set } from "mongoose";
const defaultStyles = {
    'wrapper' : 'flex items-center justify-center border-2',
    'input' : ' focus:outline-none'
}
const sizeStyle = {
    'sm' : 'py-1 px-2 gap-2 rounded-md w-40',
    'md' : 'py-1 px-2 gap-4 rounded-md w-60',
    'lg' : 'py-1 px-2 gap-6 rounded-lg w-80'
}
const variantStyles = {
    'text' : '',
    'password' : ''
}

export const Input = (props) => {
    const [isPassVisible,setPassVisibility] = useState(false);
    const [error,setError] = useState("");
    return <>
    <div>   
        <div className={`
            ${defaultStyles['wrapper']}
            ${props.size ? sizeStyle[props.size] : sizeStyle['lg']}
            `}>
            <input
            
                className={`
                    ${defaultStyles['input']}
                    ${props.size ? sizeStyle[props.size] : sizeStyle['lg']}
                `}
                type={!isPassVisible ? props.type : "text"}
                placeholder={props.placeholder}
            />
            {props.type =="password" ? 
                <button onClick={()=> {setPassVisibility(!isPassVisible)}}>
                    {isPassVisible ? <EyeSlashIcon/>: <EyeIcon/>}
                </button> : 
            null}
            
        </div>
        {error ? 
            <div className="text-red-600 text-center">
                {error}
            </div> : null}
    </div>
    </>
}