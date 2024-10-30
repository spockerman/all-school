import { FieldError } from "react-hook-form"

type InputFieldProps ={
    label: string,
    type? : string,
    register: any,
    name: string,
    defaultValue?: string,
    error?: FieldError,
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export default function InputField(
    {label,
    type = "text",
    register,
    name,
    defaultValue,
    error,
    inputProps} : InputFieldProps
){
    return (
        <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs font-medium text-gray-400">{label}</label>
                <input 
                    type={type}
                    {...register(name)} 
                    className="ring-[1.5px] ring-gray-400 p-2 rounded-md text-sm w-full"
                    {...inputProps}
                    defaultValue={defaultValue}
                />
                {error?.message && <p className="text-red-400 font-medium text-xs">{error.message.toString()}</p>}
        </div>
    )
}