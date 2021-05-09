import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMenuItemsComponent } from './menuItems/list-menu-items/list-menu-items.component';
import { CrateItemComponent } from './menuItems/crate-item.component';
import { CartComponent } from './cart/cart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutOrderComponent } from './checkout-order/checkout-order.component';

@NgModule({
    declarations: [
        AppComponent,
        ListMenuItemsComponent,
        CrateItemComponent,
        CartComponent,
        WelcomeComponent,
        CheckoutOrderComponent
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
