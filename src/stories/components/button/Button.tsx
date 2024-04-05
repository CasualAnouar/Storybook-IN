import React from 'react';
import './Button.css';

interface ButtonProps {

    type?: 'primary' | 'secondary' | 'tertiary';

    backgroundColor?: string;

    size?: 'small' | 'medium' | 'large';

    label: string;

    onClick?: () => void;

    disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
                           type = 'primary',
                           size = 'medium',
                           backgroundColor,
                           label,
                           disabled = false,
                           ...props
                       }: ButtonProps) => {
    const mode = `storybook-button--${type}`;
    const disable = disabled ? 'storybook-button--disabled' : '';
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ') + [disable].join(' ')}
            disabled={disabled}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
