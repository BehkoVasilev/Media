import className from 'classnames';
import { twMerge } from 'tailwind-merge';
import { GoSync } from 'react-icons/go'

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
}) {
  const classes = twMerge(className(
    `
        flex items-center px-3 py-1.5 border h-8
        ${primary ? 'border-blue-600 bg-blue-500 text-white' : ''}
        ${secondary ? 'border-gray-900 bg-gray-800 text-white' : ''}
        ${success ? 'border-green-600 bg-green-500 text-white' : ''}
        ${warning ? 'border-yellow-600 bg-yellow-500 text-white' : ''}
        ${danger ? 'border-red-600 bg-red-500 text-white' : ''}
        ${rounded ? 'rounded-full' : ''}
        ${outline ? 'bg-white' : ''}
        ${loading && 'opacity-80' }
        ${outline && primary ? 'text-blue-600' : ''}
        ${outline && secondary ? 'text-gray-900' : ''}
        ${outline && success ? 'text-green-600' : ''}
        ${outline && warning ? 'text-yellow-600' : ''}
        ${outline && danger ? 'text-red-600' : ''}
        ${rest.className ?? ''}
        `
  ));

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className='animate-spin'/> : children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
