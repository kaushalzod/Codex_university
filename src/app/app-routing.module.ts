import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './website/pages/about/about.component';
import { AlthashUniversityComponent } from './website/pages/althash-university/althash-university.component';
import { HomepageComponent } from './website/pages/homepage/homepage.component';
import { NewsComponent } from './website/pages/news/news.component';
import { WalletBotComponent } from './website/pages/wallet-bot/wallet-bot.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'walletbot',
    component:WalletBotComponent
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'althash-university',
    component:AlthashUniversityComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled',scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
