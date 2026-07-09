import React from 'react';

export type InputProps = {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
};

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  disabled = false,
  className,
  value,
  onChange,
  type = 'text',
}) => {
  const id = React.useId();

  return (
    <div className={className ? `bbx-input-wrap ${className}` : 'bbx-input-wrap'}>
      {label ? (
        <label htmlFor={id} className="bbx-input-label">
          {label}
        </label>
      ) : null}

      <input
        id={id}
        className="bbx-input"
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

