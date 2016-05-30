import {inject} from "aurelia-framework";
import {ApiData} from "./../services/apiData";

@inject(ApiData)
export class List {

    constructor(apiData) {
        this.apiData = apiData;

        this.showDateds = "none";
        this.showCreditlines = "none";
        this.showNumbers = "none";
        this.showTitles = "none";
        this.showCreators = "none";
        
        this.datedsCount = 0;
        this.creditlinesCount = 0;
        this.numbersCount = 0;
        this.titlesCount = 0;
        this.creatorsCount = 0;


    }

    activate(params) {

            return Promise.all([
                !params.searchDated || this.apiData.getBySearchDated(params.searchDated).then(dateds => { this.dateds = dateds; if(dateds.length > 0){ this.showDateds = "display"; this.datedsCount = dateds.length; } }),
                !params.searchCreditline || this.apiData.getBySearchCreditline(params.searchCreditline).then(creditlines => { this.creditlines = creditlines; if(creditlines.length > 0){ this.showCreditlines = "display"; this.creditlinesCount = creditlines.length; } }),
                !params.searchNumber || this.apiData.getBySearchNumber(params.searchNumber).then(numbers => { this.numbers = numbers; if(numbers.length > 0){ this.showNumbers = "display"; this.numbersCount = numbers.length; } }),
                !params.searchTitle || this.apiData.getBySearchTitle(params.searchTitle).then(titles => { this.titles = titles; if(titles.length > 0){ this.showTitles = "display"; this.titlesCount = titles.length; } }),
                !params.searchCreator || this.apiData.getBySearchCreator(params.searchCreator).then(creators => { this.creators = creators; if(creators.length > 0){ this.showCreators = "display"; this.creatorsCount = creators.length; } })
            ]);      
    }

}

