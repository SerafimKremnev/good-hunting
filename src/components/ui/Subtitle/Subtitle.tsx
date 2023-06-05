import React, {HTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import styles from './Subtitle.module.css'
import cn from 'classnames'

interface SubtitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}

const Subtitle = ({className, children}: SubtitleProps) => {
  return (
    <h3 className={cn(styles.root, className)}>
      {children}
    </h3>
  );
};

export default Subtitle;