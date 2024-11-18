import React, { useId } from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {/* Label doesn't necessarily need to be here*/}
            {label && <label htmlFor={id} className='inline-block mb-1 pl-1'>{label}</label>}

            <select name="" id={id} {...props} ref={ref} className={`${className}  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}>
        {options?.map((option)=>
            <option key={option} value={option}>{option}</option>
        )}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)