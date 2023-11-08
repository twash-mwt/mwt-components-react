import React, { MouseEventHandler } from 'react';
import { ButtonSize, ButtonKind } from './Button.types';
interface ButtonProps {
    size?: ButtonSize;
    kind?: ButtonKind;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: (props: React.PropsWithChildren<ButtonProps>) => React.JSX.Element;
export { Button, ButtonProps };
