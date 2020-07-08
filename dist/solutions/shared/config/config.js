"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var Config = /** @class */ (function () {
    function Config() {
        this.templateList = TemplateList;
    }
    return Config;
}());
exports.Config = Config;
var TemplateList = [
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
];
//# sourceMappingURL=config.js.map