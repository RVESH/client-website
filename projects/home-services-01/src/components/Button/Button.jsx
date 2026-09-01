import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

/**
 * Shared button/link control.
 * variant: 'primary' | 'outline' | 'ghost'
 * as: renders <Link> for internal paths, <a> for external/tel/wa, <button> otherwise.
 */
const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', to, href, icon: Icon, iconPosition = 'right', className = '', children, ...rest },
  ref
) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="btn__icon btn__icon--left" size={18} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn__icon btn__icon--right" size={18} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} ref={ref} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} ref={ref} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} ref={ref} {...rest}>
      {content}
    </button>
  );
});

export default Button;
