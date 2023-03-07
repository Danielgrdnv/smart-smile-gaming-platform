import React from 'react';
import {createPortal} from 'react-dom';
import {usePortal} from '../lib/usePortal';

interface IPortalProps {
    id: string;
    children: React.ReactNode;
    isRemovable?: boolean;
}

export const Portal = (props: IPortalProps) => {
    const {id, children, isRemovable} = props
    const target = usePortal(id, isRemovable);
    return createPortal(children, target, id);
};
