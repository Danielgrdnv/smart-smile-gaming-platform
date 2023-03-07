import React from 'react';
import clsx from 'clsx';
import cls from './modal.module.scss';
import {Portal} from "@/shared/ui/portal";

interface IModalProps {
    isOpen: boolean;
    id?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Modal = (props: IModalProps) => {
    const {className, isOpen, children, id} = props;
    return (isOpen ? <Portal id={id || 'modal-root'}>
        <div
            className={clsx(
                cls.modal,
                className,
            )}
        >
            {children}
        </div>
    </Portal> : null)

};
