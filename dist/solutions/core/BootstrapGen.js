"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapGen = void 0;
var PresetComponent_1 = require("./presetComponent/PresetComponent");
var BootstrapGen = /** @class */ (function () {
    function BootstrapGen(fileType, fileName, filePath) {
        this.fileType = fileType;
        this.fileName = fileName;
        this.filePath = filePath;
    }
    BootstrapGen.prototype.presetComponent = function () {
        PresetComponent_1.PresetComponent(this.fileType, this.fileName, this.filePath);
    };
    return BootstrapGen;
}());
exports.BootstrapGen = BootstrapGen;
//# sourceMappingURL=BootstrapGen.js.map