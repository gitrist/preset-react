import {AbstractAction} from "../abstract/abstract.action";
import {IInput} from "../interfaces";
import {TYPES} from "../utils/enum";
import * as inquirer from "inquirer";
import {BootstrapComponentGen} from "../../solutions/core";
import {BootstrapComponentAction} from "./bootstrap.component.action";

export class GeneratorAction extends AbstractAction{
  public async handle(inputs: IInput[],options: IInput[]){
    await dispatch(inputs.concat(options));
  }
}

export const dispatch = async (inputs: IInput[]) => {
  const componentName = inputs.find((option: IInput) => option.name === TYPES.COMPONENT.toLowerCase())!.value as string;
  const schematic = inputs.find((option: IInput) => option.name === TYPES.SCHEMATIC.toLowerCase())!.value as string;
  const path = inputs.find((option: IInput) => option.name === TYPES.PATH.toLowerCase())!.value as string;
  let framework = inputs.find((option: IInput) => option.name === TYPES.NAME.toLowerCase())!.value as string;
  if(framework = await shouldAskForComponent(framework)){
    switch (framework) {
      case  TYPES.REACT:
        new BootstrapComponentGen(new BootstrapComponentAction()).load({framework, schematic, name: componentName, path});
        return ;
    }
  }
};

//选择框架模板
export const shouldAskForComponent = async (framework:string): Promise<string> => {
  if(!framework){
    const {action} = await inquirer.prompt([
      {
        name: 'action',
        type: 'list',
        message: `select a Template`,
        choices: [
          {name: 'React', value: 'React'},
          {name: 'Vue', value: 'Vue'},
          {name: 'Angular', value: 'Angular'},
        ]
      }
    ]);
    return action;
  }
  return framework;
};