import * as inquirer from 'inquirer';
import * as chalk from 'chalk';
import * as shelljs from 'shelljs';
import { CheckExist } from '../../../framework/utils/checkExist/CheckExist'
import * as ModalLocalJson from '../../../framework/local/modalLocal.json'

export async function PresetComponent(fileType: string, fileName: string, filePath?: string) {
    // CheckExist()
    console.log("ModalLocalJson",ModalLocalJson)
    const {action} = await inquirer.prompt([
        {
            name: 'action',
            type: 'checkbox',
            message: `针对 hooks 和 redux 做兼容`,
            choices: [
                { name: 'simple', value: 'simple' },
                { name: 'redux', value: 'redux' },
                { name: 'hooks', value: 'hooks' },
                { name: 'service', value: 'service' },
                { name: 'dto', value: 'dto' },
                { name: '退出', value: false },
            ],
            default: 'simple'
        }
    ])
    if(!action){
        return;
    }

    console.log(action,action.length,111)

    // if(action!=='simple'){
    //     console.log(chalk.green('功能开发中！敬请期待！(⊙o⊙)…'))
    //     return;
    // }

    // if(action==='simple'){
    //     console.log(action)
    // }

}