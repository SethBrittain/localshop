import { Injectable } from '@angular/core';
import { Client, Databases, Query, Account } from 'appwrite';
import { BehaviorSubject } from 'rxjs';
import { GlobalConstants } from '../global.config';

const client : Client = new Client()
  .setEndpoint(GlobalConstants.ENDPOINT_URL)
  .setProject(GlobalConstants.PROJECT_ID);

const account : Account = new Account(client);
const databases : Databases = new Databases(client);

@Injectable()
export class SearchService {
    private productsSource = new BehaviorSubject<Array<Object>>([]);
    products = this.productsSource.asObservable();
    constructor() { }

    searchQuery(query: string){
        let getDataPromise = databases.listDocuments(
            GlobalConstants.DATABASE_ID, 
            GlobalConstants.PRODUCTS_TABLE_ID,
            [
                Query.search("product_name", query)
            ]
        );
        
        let self = this;
        getDataPromise.then(function (response) {
            self.productsSource.next(response.documents);
        }, function (error) {
            console.log(error);
        });
    }
}