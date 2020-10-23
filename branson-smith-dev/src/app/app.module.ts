import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { PortfolioCtaBoxComponent } from './portfolio-cta-box/portfolio-cta-box.component';
import { UserCreateComponent } from './user-create/user-create.component';

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
    PortfolioMetaColumnComponent,
    PortfolioCtaBoxComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
