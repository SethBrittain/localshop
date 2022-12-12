import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Client, Databases, Query, Account } from 'appwrite';
import { BehaviorSubject } from 'rxjs';
import { GlobalConstants } from '../../global.config';

const client : Client = new Client()
  .setEndpoint(GlobalConstants.ENDPOINT_URL)
  .setProject(GlobalConstants.PROJECT_ID);
const databases : Databases = new Databases(client);

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public popularProducts : any;
  public popularStores : any;

  constructor() { }
  
  ngOnInit(): void {
    let self = this;

    let getDataPromise = databases.listDocuments(
      GlobalConstants.DATABASE_ID, 
      GlobalConstants.PRODUCTS_TABLE_ID,
      [
        Query.limit(4),
        Query.orderAsc("product_name")
      ]
    );
    getDataPromise.then(function (response) {
      self.popularProducts = response.documents;
    }, function (error) {
        console.log(error);
    });

    let getStoresPromise = databases.listDocuments(
      GlobalConstants.DATABASE_ID, 
      GlobalConstants.STORES_TABLE_ID,
      [
        Query.limit(4),
        Query.orderAsc("store_name")
      ]
    );
    getStoresPromise.then(function (response) {
      self.popularStores = response.documents;
    }, function (error) {
        console.log(error);
    });
  }
}