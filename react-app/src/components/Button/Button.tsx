import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  onClick,
  href,
  type = 'button',
  className = ''
}) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`;
  
  const renderIcon = () => {
    if (loading) {
      return <i className="fas fa-spinner fa-spin"></i>;
    }
    if (icon) {
      return <i className={icon}></i>;
    }
    return null;
  };

  const buttonContent = (
    <>
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};