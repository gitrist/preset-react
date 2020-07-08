import * as IBootstrapGen from './IBootstrapGen';
export declare class BootstrapGen implements IBootstrapGen.IBootstrapGen {
    constructor(fileType: string, fileName: string, filePath?: string);
    fileType: string;
    fileName: string;
    filePath: string | undefined;
    presetComponent(): void;
}
