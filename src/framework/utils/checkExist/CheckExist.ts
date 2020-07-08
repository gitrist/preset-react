import * as fs from 'fs';
import * as inquirer from 'inquirer';

export async function CheckExist(path: string){
    if (fs.existsSync(path)) {
        const input = await inquirer.prompt({
          name: 'cover',
          type: 'confirm',
          message: `已存在，是否覆盖原始文件`,
          default: false,
        })
  
        return {
          cover: input.cover
        }
      }
  
      return {
        cover: true
      }
}
