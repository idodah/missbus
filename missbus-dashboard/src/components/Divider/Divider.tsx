import React, {CSSProperties} from 'react';
import styles from './Divider.module.css'

export interface DividerProps {
    
    style?: CSSProperties;
    className?: string;
    colorType?: string;
}


const Divider: React.FC<DividerProps>  = ({ style, colorType, className }) => {
  let colorStyle = styles.colorNormal
  if (colorType === 'strong')
    colorStyle = styles.colorStrong
  return (
    <div className={[styles.divider, colorStyle, className].join(' ')} style={style} />
  )
};

export default Divider;
