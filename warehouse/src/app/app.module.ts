import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShipOrderComponent } from './shipping/ship-order.component';
import { ReceiveProductComponent } from './receiving/receive-product.component';
import { OrdersToShipComponent } from './shipping/orders-to-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    ShipOrderComponent,
    ReceiveProductComponent,
    OrdersToShipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
