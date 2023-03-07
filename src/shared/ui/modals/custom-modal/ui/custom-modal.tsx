import clsx from 'clsx';
import React, {useRef} from 'react';
import {useOutsideClick} from '@/shared/lib/hooks';
import {ReactComponent as ArrowBack} from '@/shared/assets/arrow-round-icon.svg';
import {ReactComponent as CrossIcon} from '@/shared/assets/close-icon.svg';
import {Title} from '@/shared/ui/title';
import {Modal} from '@/shared/ui/modals';
import cls from './custom-modal.module.scss';

interface ICustomModalProps {
    className?: string;
    children: React.ReactNode;
    onClose: () => void;
    onBack?: () => void;
    isOpen: boolean;
    title?: string;
    modalClassName?: string;
}

export const CustomModal = (props: ICustomModalProps) => {
    const {
        isOpen,
        onClose,
        children,
        className,
        title,
        onBack,
        modalClassName,
    } = props;

    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => {
        onClose();
    });

    return (
        <Modal id='custom-modal-root' isOpen={isOpen} className={modalClassName}>
            <div ref={ref} className={clsx(className, cls.wrapper)}>

                <div className={cls.header}>
                    {onBack ? <ArrowBack onClick={onBack} className={cls.backIcon}/> : <div/>}
                    {title ? <Title className={clsx(cls.title)}>{title || ''}</Title> : <div/>}
                    <CrossIcon onClick={onClose} className={cls.crossIcon}/>
                </div>

                <div className={cls.content}>{children}</div>

            </div>
        </Modal>

    );
};