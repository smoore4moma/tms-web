import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {ApiData} from "./../services/apiData";

@inject(ApiData,Router)
export class Details {

    constructor(apiData,router) {
        this.apiData = apiData;
        this.router = router;
    }

    activate(params) {
    	return this.apiData.getByObjectId(params.id)
    			   .then(item => this.item = item);
    }

}