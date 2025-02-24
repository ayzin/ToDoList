import className from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    children : React.ReactNode,
    primary?: boolean
    secondary?: boolean
    success?: boolean
    warning?: boolean
    danger?: boolean
    outline?: boolean
    rounded?: boolean
    loading?: boolean
    
}

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
} : ButtonProps) {
  const classes = className(
    rest?.className,
    'flex items-center justify-center px-5 py-5 border h-8 cursor-pointer transition-colors duration-200',
    {
      'opacity-80': loading,
      'rounded-full': rounded,
      'bg-transparent': outline,
      'border-blue-500 text-blue-600 hover:bg-blue-100': outline && primary,
      'border-gray-300 text-gray-900 hover:bg-gray-100': outline && secondary,
      'border-green-500 text-green-500 hover:bg-green-100': outline && success,
      'border-yellow-400 text-yellow-500 hover:bg-yellow-100': outline && warning,
      'border-red-500 text-red-500 hover:bg-red-100': outline && danger,
    }
  );
  

  return (
    <button {...rest} disabled={loading} className={classes}>
      {children}
    </button>
  );
}

export default Button;
