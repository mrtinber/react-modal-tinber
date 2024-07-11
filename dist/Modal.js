import React from "react";
// *Note: the "modal-wrapper" class is actually used to define a backdrop if needed*
export var Modal = function (_a) {
    var open = _a.open, onClose = _a.onClose, message = _a.message, containerClassName = _a.containerClassName, messageClassName = _a.messageClassName, closeButtonClassName = _a.closeButtonClassName, closeButtonLabel = _a.closeButtonLabel, children = _a.children;
    // This is to avoid closing the modal when clicking on the actual message, and only doing so when clicking on the backdrop
    var handleContainerClick = function (event) {
        event.stopPropagation();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("dialog", { className: 'modal__wrapper', open: open, onClick: onClose },
            React.createElement("div", { className: containerClassName, onClick: handleContainerClick },
                message && React.createElement("div", { className: messageClassName }, message),
                children,
                React.createElement("button", { className: closeButtonClassName, onClick: onClose }, closeButtonLabel)))));
};
