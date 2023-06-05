import React, {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import styles from './Button.module.css'
import cn from 'classnames'
import Link from "next/link";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  variant?: 'white' | 'gray'
  href?: string
  onClick?: (e: any) => void
}

const Button = ({className, href, variant='white', children, onClick}: ButtonProps) => {
  return (
    href ?
    <Link
      href={href}
      onClick={onClick}
      className={cn(styles.root, className, {
        [styles.gray]: variant == 'gray'
      })}>
      {children}
    </Link> :
    <button
      onClick={onClick}
      className={cn(styles.root, className, {
        [styles.gray]: variant == 'gray'
      })}>
      {children}
    </button>
  );
};

export default Button;