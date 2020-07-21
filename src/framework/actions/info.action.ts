import { AbstractAction } from "../abstract/abstract.action";
import * as figlet from "figlet";
import Printer from "@darkobits/lolcatjs";

export class InfoAction extends AbstractAction{
    public async handle(){
        showBanner();
    }
}

const showBanner = () => {
    const TXT = figlet.textSync("R E A C T",{
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
    console.log("\n🚀🚀模板编译脚手架🚀🚀");
    console.log(TXT,Printer);
    // Printer.default(TXT)
}