import * as IConfig from './IConfig'

export class Config implements IConfig.IConfig {
    constructor() {
        this.templateList = TemplateList;
    }
    public templateList: IConfig.ITemplate[];
}

const TemplateList: IConfig.ITemplate[] = [
    {
        command: 'module',
        alias: 'm',
        desc: 'Create Module',
        prefix: '🍉',
    },
    {
        command: 'component',
        alias: 'c',
        desc: 'Create Component',
        prefix: '🍌',
    },
    {
        command: 'dto',
        alias: 'd',
        desc: 'Create DTO',
        prefix: '🍎',
    },
    {
        command: 'enum',
        alias: 'e',
        desc: 'Create Enum',
        prefix: '🍐',
    },
    {
        command: 'service',
        alias: 's',
        desc: 'Create Service',
        prefix: '🍇',
    },
]
