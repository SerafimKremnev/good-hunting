import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './SvgWrapper.module.css'
import cn from "classnames";
import Link from "next/link";

interface SvgWrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode
  href?: string
  onClick?: () => void
  type: 'button' | 'deafult'
}

const SvgWrapper = ({children, href, onClick, type='default', className}: SvgWrapperProps) => {
  return (
    href ?
    <Link href={href} className={cn(styles.root, styles.link, className)}>
      {children}
    </Link> :
    (type == 'button' ?
      <button onClick={onClick} className={cn(styles.root, styles.link, className)}>
        {children}
      </button> :
      <div className={cn(styles.root, className)}>
        {children}
      </div>
    )
  );
};

export default SvgWrapper;