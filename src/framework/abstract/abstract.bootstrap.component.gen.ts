import {AbstractBootstrapAction} from "./abstract.bootstrap.action";
import {IComponent} from "../interfaces/IComponent";

export abstract class AbstractBootstrapComponentGen {
  constructor(protected action: AbstractBootstrapAction) {}
  public abstract load(params: IComponent): void;
}
