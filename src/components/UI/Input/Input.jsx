import React from 'react';
import styles from './input.module.css'

const Input = ({children, ...props}) => {
    return (
        <input className={styles.Input} {...props}>
            {children}
        </input>
    );
};

export default Input;
