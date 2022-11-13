import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { SearchBarComponent } from './nav/navbar/search-bar/search-bar.component';
import { CartButtonComponent } from './nav/navbar/cart-button/cart-button.component';
import { AccountButtonComponent } from './nav/navbar/account-button/account-button.component';
import { LocationSelectorComponent } from './nav/navbar/location-selector/location-selector.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShopCardComponent } from './pages/search-page/shop-card/shop-card.component';
import { ProductCardComponent } from './pages/search-page/product-card/product-card.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { SearchService } from './services/search.service';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './nav/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    CartButtonComponent,
    AccountButtonComponent,
    LocationSelectorComponent,
    SearchPageComponent,
    HomePageComponent,
    ShopCardComponent,
    ProductCardComponent,
    CartPageComponent,
    CheckoutPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
