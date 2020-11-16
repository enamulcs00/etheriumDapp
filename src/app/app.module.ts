import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWalletScreenComponent } from './pages/admin-wallet-screen/admin-wallet-screen.component';
import { AdminWalletComponent } from './pages/admin-wallet/admin-wallet.component';
import { ConvertDaiComponent } from './pages/convert-dai/convert-dai.component';
import { HomeComponent } from './pages/home/home.component';
import { RebalanceComponent } from './pages/rebalance/rebalance.component';
import { TransactionHistoryComponent } from './pages/transaction-history/transaction-history.component';
import { UserWalletRebalanceComponent } from './pages/user-wallet-rebalance/user-wallet-rebalance.component';
import { UserWalletScreenComponent } from './pages/user-wallet-screen/user-wallet-screen.component';
import { HeaderComponent } from './pages/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminWalletScreenComponent,
    AdminWalletComponent,
    ConvertDaiComponent,
    HomeComponent,
    RebalanceComponent,
    TransactionHistoryComponent,
    UserWalletRebalanceComponent,
    UserWalletScreenComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
