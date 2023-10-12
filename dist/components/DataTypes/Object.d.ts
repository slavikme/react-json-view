export default RjvObject;
declare class RjvObject extends React.PureComponent<any, any, any> {
    static getState: (props: any) => {
        expanded: any;
        object_type: string;
        parent_type: string;
        size: number;
        hovered: boolean;
    };
    static getDerivedStateFromProps(nextProps: any, prevState: any): {
        prevProps: any;
        expanded: any;
        object_type: string;
        parent_type: string;
        size: number;
        hovered: boolean;
    } | null;
    constructor(props: any);
    state: {
        prevProps: {};
        expanded: any;
        object_type: string;
        parent_type: string;
        size: number;
        hovered: boolean;
    };
    toggleCollapsed: () => void;
    getObjectContent: (depth: any, src: any, props: any) => import("react/jsx-runtime").JSX.Element;
    getEllipsis: () => import("react/jsx-runtime").JSX.Element | null;
    getObjectMetaData: (src: any) => import("react/jsx-runtime").JSX.Element;
    getBraceStart(object_type: any, expanded: any): import("react/jsx-runtime").JSX.Element;
    render(): import("react/jsx-runtime").JSX.Element;
    renderObjectContents: (variables: any, props: any) => any[];
}
import React from 'react';
