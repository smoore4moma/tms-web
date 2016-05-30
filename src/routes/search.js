import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {Validation} from "aurelia-validation";

@inject(Router, Validation)
export class Search {

    constructor(router, validation) {
        this.router = router;
        this.validation = validation.on(this)
            .ensure("searchTitle")
            .containsOnlyAlphanumericsOrWhitespace()
            .hasMaxLength(50)
            .ensure("searchCreator")
            .containsOnly(/^[a-zA-Z0-9'\s]*$/)
            .hasMaxLength(50)
            .ensure("searchDated")
            .containsOnlyAlphanumericsOrWhitespace()
            .hasMaxLength(50)
            .ensure("searchCreditline")
            .containsOnlyAlphanumericsOrWhitespace()
            .hasMaxLength(50)
            .ensure("searchNumber")
            .containsOnly(/^[a-zA-Z0-9.-_\s]*$/)
            .hasMaxLength(50);
    }       


    search() {

        this.validation.validate().then(() => {
            
            let url = this.router.generate("list", { 
                searchTitle:this.searchTitle,
                searchCreator:this.searchCreator,
                searchDated:this.searchDated,
                searchCreditline:this.searchCreditline,
                searchNumber:this.searchNumber });

            this.router.navigate(url);

        });          

    }
}
