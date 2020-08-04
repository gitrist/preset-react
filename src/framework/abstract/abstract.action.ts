import { IInput } from '../interfaces';

export abstract class AbstractAction{
    public abstract async handle(
        inputs?: IInput[],
        options?: IInput[],
        extraFlags?: string[],
    ): Promise<void>;
}