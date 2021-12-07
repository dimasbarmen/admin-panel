import React from 'react';

function Component({children, appearance, icon, size, disabled, className: userClassName, ...rest}, ref) {
  const typeClass = appearance === 'text' ? 'button_transparent' : '';
  const sizeClass = size === 's' ? 'button_small' : '';
  const disabledClass = disabled ? 'button_disabled' : '';
  const className = `button ${typeClass} ${sizeClass} ${disabledClass} ${userClassName || ''}`;

  return (
    <button className={className} disabled={disabled} {...rest} ref={ref}>
      {icon}
      {children}
    </button>
  )
}

export const Button = React.forwardRef(Component);
