import * as IPresetComponent from './IPresetCompinent';
export declare function PresetComponent(fileType: string, fileName: string, filePath?: string): Promise<void>;
export declare function getConfig(): IPresetComponent.choice[];
