import { AbstractAction } from "../abstract/abstract.action";
import * as figlet from "figlet";
import Printer from "@darkobits/lolcatjs";

export class InfoAction extends AbstractAction{
    public async handle(){
        showBanner();
    }
}

export const showBanner = () => {
    const TXT = figlet.textSync("R E A C T",{
        // font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
    const print = <any>new Printer();
    print.fromString(`\n       >>>React Preset<<< 脚手架\n ${TXT}`);
    console.log(print.toString());
}