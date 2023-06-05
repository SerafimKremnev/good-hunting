import React, {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './Typography.module.css'
import cn from 'classnames'

interface TypographyProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode
}

const Typography = ({className, children}: TypographyProps) => {
  return (
    <p className={cn(styles.root, className)}>
      {children}
    </p>
  );
};

export default Typography;