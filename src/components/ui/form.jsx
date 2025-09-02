import React from 'react';

// Form Container
export const Form = ({ children, onSubmit, className = '' }) => (
  <form onSubmit={onSubmit} className={`space-y-6 ${className}`}>
    {children}
  </form>
);

// Form Group
export const FormGroup = ({ children, className = '' }) => (
  <div className={`space-y-4 ${className}`}>
    {children}
  </div>
);

// Form Field
export const FormField = ({ children, className = '' }) => (
  <div className={`${className}`}>
    {children}
  </div>
);

// Label
export const Label = ({ children, required = false, className = '' }) => (
  <label className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}>
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
);

// Input
export const Input = ({ 
  type = 'text', 
  placeholder = '', 
  value = '', 
  onChange, 
  disabled = false,
  required = false,
  className = '',
  ...props 
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
    required={required}
    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
    {...props}
  />
);

// Select
export const Select = ({ 
  options = [], 
  value = '', 
  onChange, 
  placeholder = 'Select option',
  disabled = false,
  required = false,
  className = '',
  ...props 
}) => (
  <select
    value={value}
    onChange={onChange}
    disabled={disabled}
    required={required}
    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
    {...props}
  >
    <option value="">{placeholder}</option>
    {options.map((option, index) => (
      <option key={index} value={option.value || option}>
        {option.label || option}
      </option>
    ))}
  </select>
);

// Textarea
export const Textarea = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  rows = 3,
  disabled = false,
  required = false,
  className = '',
  ...props 
}) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    rows={rows}
    disabled={disabled}
    required={required}
    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed resize-vertical ${className}`}
    {...props}
  />
);

// Checkbox
export const Checkbox = ({ 
  checked = false, 
  onChange, 
  label = '', 
  disabled = false,
  className = '',
  ...props 
}) => (
  <label className={`flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:cursor-not-allowed"
      {...props}
    />
    {label && <span className={`ml-2 text-sm ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>{label}</span>}
  </label>
);

// Radio Group
export const RadioGroup = ({ 
  options = [], 
  value = '', 
  onChange, 
  name,
  disabled = false,
  className = '',
  orientation = 'horizontal'
}) => (
  <div className={`flex ${orientation === 'vertical' ? 'flex-col space-y-2' : 'gap-6'} ${className}`}>
    {options.map((option, index) => (
      <label key={index} className={`flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        <input
          type="radio"
          name={name}
          value={option.value || option}
          checked={value === (option.value || option)}
          onChange={onChange}
          disabled={disabled}
          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 disabled:cursor-not-allowed"
        />
        <span className={`ml-2 text-sm ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
          {option.label || option}
        </span>
      </label>
    ))}
  </div>
);

// Form Actions
export const FormActions = ({ children, className = '' }) => (
  <div className={`flex gap-3 pt-4 border-t border-gray-200 ${className}`}>
    {children}
  </div>
);

// Error Message
export const ErrorMessage = ({ message, className = '' }) => (
  message ? (
    <p className={`text-sm text-red-600 mt-1 ${className}`}>
      {message}
    </p>
  ) : null
);

// Helper Text
export const HelperText = ({ text, className = '' }) => (
  text ? (
    <p className={`text-sm text-gray-500 mt-1 ${className}`}>
      {text}
    </p>
  ) : null
);