import {IComponent} from "../interfaces/IComponent";

export abstract class AbstractBootstrapAction{
  public abstract async handle(params:IComponent): Promise<void>;
}