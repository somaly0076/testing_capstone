import React from 'react';

const FormInput = ({ 
  label, 
  children, 
  className = '', 
  placeholder, 
  formType,
  disabled = null,
  ...props 
}) => {
  const inputProps = {
    ...props,
    placeholder,
    'data-formtype': formType,
  };

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-4">
          {label}
        </label>
      )}
      {typeof children === 'function' ? (
        children(inputProps)
      ) : (
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          {...inputProps}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default FormInput;