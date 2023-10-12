export default ReactJsonView;
declare class ReactJsonView extends React.PureComponent<any, any, any> {
    static defaultProps: {
        src: {};
        name: string;
        theme: string;
        collapsed: boolean;
        collapseStringsAfterLength: boolean;
        shouldCollapse: boolean;
        sortKeys: boolean;
        quotesOnKeys: boolean;
        groupArraysAfterLength: number;
        indentWidth: number;
        enableClipboard: boolean;
        displayObjectSize: boolean;
        displayDataTypes: boolean;
        onEdit: boolean;
        onDelete: boolean;
        onAdd: boolean;
        onSelect: boolean;
        iconStyle: string;
        style: {};
        validationMessage: string;
        defaultValue: null;
        displayArrayKey: boolean;
    };
    static getDerivedStateFromProps(nextProps: any, prevState: any): any;
    static validateState: (state: any) => any;
    constructor(props: any);
    state: {
        addKeyRequest: boolean;
        editKeyRequest: boolean;
        validationFailure: boolean;
        src: {};
        name: string;
        theme: string;
        validationMessage: string;
        prevSrc: {};
        prevName: string;
        prevTheme: string;
    };
    rjvId: string;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    getListeners: () => {
        reset: () => void;
        'variable-update': () => void;
        'add-key-request': () => void;
    };
    render(): import("react/jsx-runtime").JSX.Element;
    updateSrc: () => void;
    addKeyRequest: () => void;
    resetState: () => void;
}
import React from 'react';
