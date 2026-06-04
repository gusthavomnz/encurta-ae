interface InputFieldProps {
    placeholder : string;
    type: 'email' | 'password' | 'text';
    
}

export function InputField({ placeholder, type }: InputFieldProps) {
    return (
        <input type={type} placeholder={placeholder} className="w-full h-10 bg-white border border-gray-700  rounded-sm px-3 " />
    )
}


export default InputField
