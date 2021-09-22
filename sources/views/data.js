import {JetView} from "webix-jet";
import {data} from "models/records";
import {dataOrder} from "models/orders";
import {dataSale} from "models/sales";

export default class DataView extends JetView{
	config(){
		return { 
			type:"clean",
			rows:[
            	{ 
            		view:"datatable" ,autoConfig:true, localId:"dataOrder", css:"webix_shadow_medium"
            	},
            	{ 
            		view:"datatable" ,autoConfig:true, localId:"dataSale", css:"webix_shadow_medium"
            	}
        	]
    	};
	}
	init(){
		webix.promise.all([
            dataOrder.waitData,
            dataSale.waitData
        ]).then(()=>{
        	const tableOrder = this.$$("dataOrder");
        	const tableSales = this.$$("dataSale");
        	tableOrder.parse(dataOrder);
        	tableSales.parse(dataSale);
        });
	}
}