interface InputFieldProps {
    placeholder : string;
    type: 'email' | 'password' | 'text';
    value?: string;
    onChange?: (e: any) => void; 
}


export function InputField({ placeholder, type, value, onChange }: InputFieldProps) {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value}       // Adicionado aqui
            onChange={onChange} // Adicionado aqui
            className="w-full h-10 bg-white border border-gray-700 rounded-sm px-3" 
        />
    )
}

export default InputField;