import {AbstractBootstrapAction} from "../abstract/abstract.bootstrap.action";
import {IComponent} from "../interfaces/IComponent";
import * as shelljs from 'shelljs'
import {CheckExist} from "../utils/checkExist/CheckExist";
import * as path from 'path';
import * as nameStyles from 'name-styles';

export class BootstrapComponentAction extends AbstractBootstrapAction{
  public async handle(params:IComponent){
    const fileNamePascal = nameStyles.pascal(params.name!);
    const dirNameHyphen = nameStyles.hyphen(params.name!);
    const dirName = dirNameHyphen+ '-component';
    const fileName = fileNamePascal+ 'Component';
    const _path = process.cwd();
    const sourcePath = path.resolve(__dirname, `..\\..\\..\\src\\solutions\\template\\components\\${params.schematic}\\*`);
    if(await CheckExist(`${_path}\\${dirName}`)){
      shelljs.cd(_path);
      shelljs.mkdir(dirName);
      shelljs.cd(dirName);
      shelljs.cp('-R',sourcePath,`${_path}\\${dirName}`);
      shelljs.ls().forEach(file => {
        let destFile = file;
        if (/^fname\.|\.tpl$/ig.test(file)) {
          destFile = dirNameHyphen + '.' + file.replace(/^filename\.|\.tpl$/ig, '');
          shelljs.mv(file, destFile)
        }
        // component
        shelljs.sed('-i', /%_ComponentName_%/g, fileName, destFile);
      });
      console.log(sourcePath,`${_path}\\${dirName}`);
    }else{

    }
  }
}
