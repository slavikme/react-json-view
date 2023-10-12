export default attributeStore;
declare const attributeStore: ObjectAttributes;
declare class ObjectAttributes extends EventEmitter {
    objects: {};
    set: (rjvId: any, name: any, key: any, value: any) => void;
    get: (rjvId: any, name: any, key: any, default_value: any) => any;
    handleAction: (action: any) => void;
    updateSrc: (rjvId: any, request: any) => any;
    deepCopy: (src: any, copy_namespace: any) => any;
}
import { EventEmitter } from 'events';
