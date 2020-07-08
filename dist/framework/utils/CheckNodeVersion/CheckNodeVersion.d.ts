import * as ICheckNodeVersion from "./ICheckNodeVersion";
declare class CheckNodeVersionFactory implements ICheckNodeVersion.ICheckNodeVersion {
    constructor(expect: string, name: string);
    expect: string;
    name: string;
    getCheckNodeVersion: () => void;
}
export declare const CheckNodeVersion: typeof CheckNodeVersionFactory;
export {};
