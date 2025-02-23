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
    'flex items-center justify-center px-5 py-5 border h-8 cursor-pointer',
    {
      'opacity-80': loading,
      'border-blue-500 bg-blue-500 text-gray-100': primary,
      'border-gray-300 bg-gray-900 text-gray-100': secondary,
      'border-green-500 bg-green-500 text-gray-100': success,
      'border-yellow-400 bg-yellow-400 text-gray-100': warning,
      'border-red-500 bg-red-500 text-gray-100': danger,
      'rounded-full': rounded,
      'bg-transparent': outline,
      'border-blue-500 text-blue-600': outline && primary,
      'text-gray-900': outline && secondary,
      'border-green-500 text-green-500': outline && success,
      'border-yellow-400 text-yellow-500': outline && warning,
      'border-red-500 text-red-500': outline && danger,
    }
  );
  

  return (
    <button {...rest} disabled={loading} className={classes}>
      {children}
    </button>
  );
}

export default Button;
