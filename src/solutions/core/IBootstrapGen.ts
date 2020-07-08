export interface IBootstrapGen {
    fileType: string;
    fileName: string;
    filePath?: string | undefined;
    presetComponent(): void;
}