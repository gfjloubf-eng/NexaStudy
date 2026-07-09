import React from 'react';

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = {
  variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  type = 'button',
  disabled = false,
  children,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={
        className ??
        `bbx-btn ${
          variant === 'primary' ? 'bbx-btn--primary' : 'bbx-btn--secondary'
        }`
      }
    >
      {children}
    </button>

  );
};


