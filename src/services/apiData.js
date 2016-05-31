import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {HttpClient} from "aurelia-fetch-client"; //"aurelia-http-client";

/*** 

IMPORTANT: For demo purposes, the json from api calls is replaced with fixed files.
View the GitHub project here: https://github.com/smoore4moma/tms-api for info on 
creating the web api against a TMS database.

ANY search term will return the same json data!

 ***/

//let baseUrl = "http://yourwebapiserver:8080/api";
let baseUrl = "./src/services/data/";
let token = "?token=api_key_goes_here";


@inject(Router,HttpClient)
export class ApiData {

    constructor(router,httpClient){
        this.router = router;
        this.http = httpClient;	
    }

    getByObjectId(id) {
        //return this.http.fetch(baseUrl + "/objects/" + id + token) 
        return this.http.fetch(baseUrl + "objects.json") 
		.then(response => response.json())
		.then(response => {
		    return response.objects[0];	
		});
    }

    getByConstituentId(id) {
        //return this.http.fetch(baseUrl + "/artists/" + id + token)
        return this.http.fetch(baseUrl + "/artists/" + id + token)
		 .then(response => response.json())
		 .then(response => {
		     return response.objects;
		 });
    }


    /***** Search functions *****/

    getBySearchDated(searchDated) {
               
        //return this.http.fetch(baseUrl + "/objects/" + token + "&search=" + searchDated + "&searchtype=dated")
        return this.http.fetch(baseUrl + "objects.json")
            .then(response => response.json())
            .then(response => {

                    return response.objects;

            });    
    }

    getBySearchCreditline(searchCreditline) {    
   
        //return this.http.fetch(baseUrl + "/objects/" + token + "&search=" + searchCreditline + "&searchtype=creditline")
        return this.http.fetch(baseUrl + "objects.json")
            .then(response => response.json())
            .then(response => {

                    return response.objects;

            });    
    }

    getBySearchNumber(searchNumber) {    

        //return this.http.fetch(baseUrl + "/objects/" + token + "&search=" + searchNumber + "&searchtype=objectnumber")
        return this.http.fetch(baseUrl + "objects.json")
            .then(response => response.json())
            .then(response => {

                    return response.objects;

            });    
    }

    getBySearchTitle(searchTitle) {
        
        //return this.http.fetch(baseUrl + "/objects/" + token + "&search=" + searchTitle + "&searchtype=title")
        return this.http.fetch(baseUrl + "objects.json")
              .then(response => response.json())
              .then(response => {

                      return response.objects;

              });
    }

    getBySearchCreator(searchCreator) {    

        //return this.http.fetch(baseUrl + "/artists/" + token + "&search=" + searchCreator)
        return this.http.fetch(baseUrl + "objects_artist.json")
        .then(response => response.json())
        .then(response => {

            var result = [];
            for(var i = 0; i < response.artists.length; i++) {
                result = result.concat(response.artists[i].objects);
            }

                return result;

        });
    }



}


