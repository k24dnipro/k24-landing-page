import Link from 'next/link';
import { ButtonProps } from '@/types';
import styles from './Button.module.scss';

export default function Button({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  href,
  disabled = false,
  type = 'button',
  className = '',
  target,
  rel,
}: ButtonProps) {
  const buttonClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`.trim();

  if (href && !disabled) {
    return (
      <Link href={href} className={buttonClasses} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

