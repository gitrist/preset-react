import {AbstractBootstrapComponentGen} from "../../framework/abstract/abstract.bootstrap.component.gen";
import {IComponent} from "../../framework/interfaces/IComponent";


export class BootstrapComponentGen extends AbstractBootstrapComponentGen{
  public load(params: IComponent): void {
    this.action.handle(params).then(r => {})
  }
}