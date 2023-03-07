import React, {useRef, useState} from 'react';
import {useOutsideClick} from '@/shared/lib/hooks';
import {ReactComponent as ErrorIcon} from '../../inputs/input/assets/input-error-icon.svg';
import cls from './error-component.module.scss';

export const ErrorComponent = (props: { error: string; id: string }) => {
    const {error, id} = props;
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    useOutsideClick(ref, () => setOpen(false));

    // TODO: сделать плавное появление
    return (
        <div>
            <button
                type='button'
                id={`${id}_error`}
                ref={ref}
                title={error}
                className={cls.inputErrorIcon}
                onClick={() => {
                    setOpen((prevState) => !prevState);
                }}
            >
                <ErrorIcon/>
            </button>
            {open && <div className={cls.inputErrorMessage}>{error}</div>}
        </div>
    );
};
