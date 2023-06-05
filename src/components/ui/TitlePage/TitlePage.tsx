import React, {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './TitlePage.module.css'
import cn from 'classnames'

interface TypographyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}

const TitlePage = ({className, children}: TypographyProps) => {
  return (
    <div className={cn(styles.root, className)}>
      {children}
    </div>
  );
};

export default TitlePage;