import React, { ReactNode } from "react";
type ModalProps = {
    open: boolean;
    onClose: () => void;
    message?: string;
    containerClassName?: string;
    messageClassName?: string;
    closeButtonClassName?: string;
    closeButtonLabel: string | ReactNode;
    children?: ReactNode;
};
export declare const Modal: ({ open, onClose, message, containerClassName, messageClassName, closeButtonClassName, closeButtonLabel, children }: ModalProps) => React.JSX.Element;
export {};
