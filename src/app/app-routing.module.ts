import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminWalletComponent } from './pages/admin-wallet/admin-wallet.component';
import {
    AdminWalletScreenComponent
} from './pages/admin-wallet-screen/admin-wallet-screen.component';
import { UserWalletScreenComponent } from './pages/user-wallet-screen/user-wallet-screen.component';
import { UserWalletRebalanceComponent } from './pages/user-wallet-rebalance/user-wallet-rebalance.component';
import { RebalanceComponent } from './pages/rebalance/rebalance.component';
import { ConvertDaiComponent } from './pages/convert-dai/convert-dai.component';
import {
    TransactionHistoryComponent
} from './pages/transaction-history/transaction-history.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {path:'admin-wallet',component: AdminWalletComponent},
  {path:'admin-wallet-screen',component: AdminWalletScreenComponent},
  {path:'user-wallet-screen',component: UserWalletScreenComponent},
  {path:'user-wallet-rebalance',component: UserWalletRebalanceComponent},
  {path:'rebalance',component: RebalanceComponent},
  {path:'convert-dai',component: ConvertDaiComponent},
  {path:'transaction-history',component: TransactionHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
