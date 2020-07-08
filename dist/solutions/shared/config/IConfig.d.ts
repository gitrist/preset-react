export interface IConfig {
    templateList: ITemplate[];
}
export interface ITemplate {
    command: string;
    alias: string;
    desc: string;
    prefix: string;
}
