import * as IBootstrapGen from './IBootstrapGen'
import { PresetComponent } from './presetComponent/PresetComponent'

export class BootstrapGen implements IBootstrapGen.IBootstrapGen {
    constructor(fileType: string, fileName: string, filePath?: string) {
        this.fileType = fileType;
        this.fileName = fileName;
        this.filePath = filePath;
    }
    public fileType: string;
    public fileName: string;
    public filePath: string | undefined;
    presetComponent(): void {
        PresetComponent(this.fileType,this.fileName,this.filePath);
    }
}