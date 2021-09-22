import {JetView} from "webix-jet";

export default class LayoutView extends JetView {
    config(){
        return {
            rows:[
                { view:"text", label:"Product Code", name:"code" },
                { view:"button", value:"Save Product" }
            ]
        };
    }
}