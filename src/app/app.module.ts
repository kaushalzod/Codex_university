import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { CustomCardComponent } from './Shared/custom-card/custom-card.component';
import { HomepageComponent } from './website/pages/homepage/homepage.component';
import { WalletBotComponent } from './website/pages/wallet-bot/wallet-bot.component';
import { AlthashUniversityComponent } from './website/pages/althash-university/althash-university.component';
import { AboutComponent } from './website/pages/about/about.component';
import { NewsComponent } from './website/pages/news/news.component';
import { CommonPageLayoutComponent } from './website/pages/common-page-layout/common-page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CustomCardComponent,
    HomepageComponent,
    WalletBotComponent,
    AlthashUniversityComponent,
    AboutComponent,
    NewsComponent,
    CommonPageLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
