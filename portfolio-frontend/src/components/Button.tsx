
import React from 'react';



interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string,
  id?: string
}
const Button = ({ variant = 'primary', disabled = false, className, id, onClick, children }: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles: Record<string, string> = {
    primary:
      'bg-gray-200 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-transparent border-white border-[1px] text-white hover:bg-gray-800 focus:ring-gray-500',
    danger:
      'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  }

  const disabledStyles = 'bg-gray-400 text-gray-700 cursor-not-allowed';

  const buttonStyles = disabled ? ` ${baseStyles} ${disabledStyles}` : `${className} ${baseStyles} ${variantStyles[variant]} `
  return (
    <button
      className={buttonStyles}
      disabled={disabled}
      id={id}
      onClick={onClick}>
      {children}
    </button>

  )
}

export default Button