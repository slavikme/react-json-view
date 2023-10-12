export default VariableEditor;
declare class VariableEditor extends React.PureComponent<any, any, any> {
    constructor(props: any);
    state: {
        editMode: boolean;
        editValue: string;
        hovered: boolean;
        renameKey: boolean;
        parsedInput: {
            type: boolean;
            value: null;
        };
    };
    render(): import("react/jsx-runtime").JSX.Element;
    getEditIcon: () => import("react/jsx-runtime").JSX.Element;
    prepopInput: (variable: any) => void;
    getRemoveIcon: () => import("react/jsx-runtime").JSX.Element;
    getValue: (variable: any, editMode: any) => import("react/jsx-runtime").JSX.Element;
    getEditInput: () => import("react/jsx-runtime").JSX.Element;
    submitEdit: (submit_detected: any) => void;
    showDetected: () => import("react/jsx-runtime").JSX.Element | undefined;
    getDetectedInput: () => import("react/jsx-runtime").JSX.Element | undefined;
}
import React from 'react';
