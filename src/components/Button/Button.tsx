import React, { MouseEventHandler } from 'react';
import { ButtonSize, ButtonKind } from './Button.types';
import styles from './Button.module.css';

const DEFAULT_BUTTON_SIZE = ButtonSize.MEDIUM;
const DEFAULT_BUTTON_TYPE = ButtonKind.PRIMARY;

interface ButtonProps {
    size?: ButtonSize;
    kind?: ButtonKind;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const { 
        onClick, 
        disabled, size = DEFAULT_BUTTON_SIZE, 
        kind = DEFAULT_BUTTON_TYPE, 
        children
    } = props;

    let btnSizeClasses = styles[size] || '';
    let btnKindClasses = styles[kind] || '';

    return <button 
                onClick={onClick} 
                disabled={disabled} 
                className={`${styles.btn} ${btnSizeClasses} ${btnKindClasses}`}
                {...props}
            >
                {children}
            </button>
}

export {
    Button,
    ButtonProps
}