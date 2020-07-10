import * as inquirer from 'inquirer';
import * as chalk from 'chalk';
import * as shelljs from 'shelljs';
import { CheckExist } from '../../../framework/utils/checkExist/CheckExist';
import * as ModalLocalJson from '../../../framework/local/modalLocal';
import * as IPresetComponent from './IPresetCompinent';
import * as path from 'path';

export async function PresetComponent(fileType: string, fileName: string, filePath?: string) {
    // console.log(22,process.cwd(),process.cwd().split(path.sep).join('/'))
    // return ;
    // // const { cover: string } = CheckExist(path.resolve(__dirname, filePath || './', fileName));
    const choices = getConfig();
    const { action } = await inquirer.prompt([
        {
            name: 'action',
            type: 'checkbox',
            message: `针对 hooks 和 redux 做兼容`,
            choices: [
                ...choices,
                { name: 'redux+redux', value: '1' },
                { name: 'hooks', value: '2' },
                { name: '退出', value: false },
            ],
            default: 'simple'
        }
    ])
    console.log(123);
    if (!action) {
        return;
    }

    console.log(action, action.length, 111)

    // if(action!=='simple'){
    //     console.log(chalk.green('功能开发中！敬请期待！(⊙o⊙)…'))
    //     return;
    // }

    // if(action==='simple'){
    //     console.log(action)
    // }

    process.exit(1)

}

export function getConfig(): IPresetComponent.choice[] {
    let cacheObj: any = Object.assign({}, ModalLocalJson);
    const keys = Object.keys(cacheObj);
    let choice: IPresetComponent.choice[] = [];
    keys.forEach((item: string) => {
        choice.push(cacheObj[item])
    })
    return choice;
}