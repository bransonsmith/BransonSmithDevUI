import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioProjectPreviewComponent } from './portfolio-project-preview/portfolio-project-preview.component';
import { PortfolioTagComponent } from './portfolio-tag/portfolio-tag.component';
import { PortfolioTagsComponent } from './portfolio-tags/portfolio-tags.component';
import { PortfolioMetaColumnComponent } from './portfolio-meta-column/portfolio-meta-column.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    PortfolioComponent,
    PortfolioProjectPreviewComponent,
    PortfolioTagComponent,
    PortfolioTagsComponent,
    PortfolioMetaColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
