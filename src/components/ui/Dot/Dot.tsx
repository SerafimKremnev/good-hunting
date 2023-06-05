import React, {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './Dot.module.css'
import cn from 'classnames'

interface DotProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: 's' | 'm' | 'l'
  color: 'main' | 'gray'
  opacity: '0.4' | '0.5' | '1'
}

const Dot = ({className, opacity, size, color}: DotProps) => {
  return (
    <div className={cn(styles.root, className, {
      [styles.gray]: color=='gray',
      [styles.light]: opacity=='0.4',
      [styles.medium]: opacity=='0.5',
      [styles.s]: size=='s',
      [styles.big]: size=='l',
    })}/>
  );
};

export default Dot;