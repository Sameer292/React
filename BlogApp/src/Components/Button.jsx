import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'blue',
    textColor = 'white',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 ${className} ${bgColor} ${textColor} `} {...props}>
            {children}
        </button>
    )
}

export default Button