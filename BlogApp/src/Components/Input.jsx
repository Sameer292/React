import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label &&
                <label htmlFor={id} className='inline-block mb-1 pl-1'>{label}</label>
            }
            <input type={type} className={`${className}  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} {...props} ref={ref} id={id} />

        </div>
    )
})

export default Input