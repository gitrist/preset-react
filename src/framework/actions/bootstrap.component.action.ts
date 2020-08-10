import {AbstractBootstrapAction} from "../abstract/abstract.bootstrap.action";
import {IComponent} from "../interfaces/IComponent";
import * as shelljs from 'shelljs'
import {CheckExist} from "../utils/checkExist/CheckExist";
import * as path from 'path';
import * as nameStyles from 'name-styles';
import * as rimraf from 'rimraf';
import {INFO_PREFIX} from "../utils/ui";
import * as fs from 'fs';

export class BootstrapComponentAction extends AbstractBootstrapAction {
  public async handle(params: IComponent) {
    const fileNamePascal = nameStyles.pascal(params.name!);
    const dirNameHyphen = nameStyles.hyphen(params.name!);
    const dirName = dirNameHyphen + '-component';
    const fileName = fileNamePascal + 'Component';
    const _path = params.path||process.cwd();
    const sourcePath = path.resolve(__dirname, `../../solutions/template/components/${params.schematic}/*`);
    const templatePath = path.resolve(__dirname, `../../solutions/template/components/${params.schematic}`);
    let action: { cover: boolean | string };
    if (!fs.existsSync(templatePath)) {
      console.log(INFO_PREFIX, "模板不存在");
      process.exit(1);
    }

    if (action = await CheckExist(`${_path}/${dirName}`)) {
      if (action.cover===true) {
        await new Promise((res: Function, rej: Function) => {
          rimraf(`${_path}\\${dirName}`, () => {
            res("删除源文件成功")
          })
        }).then((resp: any) => {
          console.log(INFO_PREFIX, resp);
        });
      }

      if (!action.cover) {
        console.log(INFO_PREFIX, "取消创建")
      }
      shelljs.cd(_path);
      shelljs.chmod("777",process.cwd());
      console.log(process.cwd());
      shelljs.mkdir("-p",dirName);
      shelljs.cd(dirName);
      shelljs.cp('-R', sourcePath, `${_path}\\${dirName}`);
      createFiles(dirNameHyphen,fileName);
      console.log(INFO_PREFIX, "文件创建成功");
    }
  }
}
// 创建文件
export const createFiles = (dirNameHyphen: string, name:string) => {
  shelljs.ls().forEach((fileName: string) => {
   if(/\.tpl$/ig.test(fileName)){
     let rename: string;
      if (/^filename.+\.tpl$/ig.test(fileName)){
        rename = dirNameHyphen + '.' + fileName.replace(/^filename\.|\.tpl$/ig, '');
      }else{
        rename = fileName.replace(/\.tpl$/ig, '');
      }

      shelljs.mv(fileName, rename);
      shelljs.sed('-i', /%_ComponentName_%/g, name, rename);
      shelljs.sed('-i', /%_StyleName_%/g, name, rename);
    }
  });
};