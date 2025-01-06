import {FieldErrors, UseFormRegister} from 'react-hook-form';
import Icon from '../icon/icon.tsx'
import {FormDataModel} from '../../App.tsx'

type InputProps = {
    type: 'text';
    id: string;
    name: "fullName" | "email" | "github" | "upload";
    label: string;
    placeholder?: string;
    register: UseFormRegister<FormDataModel>;
    errors?: FieldErrors<FormDataModel>;
}

function Input({type, id, name, label, placeholder, register, errors}: InputProps) {
    return (
        <div className="flex flex-col mb-6">
            <label htmlFor={id} className="text-custom-5-regular">{label}</label>
            <input
                className='mt-3 mb-3 rounded-[12px] border border-neutral-500 backdrop-blur-md bg-neutral-0 bg-opacity-10 p-4 text-custom-6 text-neutral-300 focus:outline-none hover:bg-opacity-20 focus:bg-opacity-20'
                type={type}
                id={id}
                placeholder={placeholder}
                {...register(name, {
                    required: `${label} is required`,
                    ...(name === 'email' && {
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                            message: "Please enter a valid email address",
                        }
                    })
                })}
            />
            {
                errors?.[name] && (
                    <div className='flex items-center gap-x-1 text-primary-500'>
                        <Icon id='info' pointer={false}/>
                        <p className='text-custom-7 text-sm'>{String(errors[name]?.message)}</p>
                    </div>
                )
            }
        </div>
    );
}

export default Input;