import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { PortfolioProjectPreviewComponent } from './portfolio/portfolio-project-preview/portfolio-project-preview.component';
import { PortfolioTagComponent } from './portfolio/portfolio-tag/portfolio-tag.component';
import { PortfolioTagsComponent } from './portfolio/portfolio-tags/portfolio-tags.component';
import { PortfolioMetaColumnComponent } from './portfolio/portfolio-meta-column/portfolio-meta-column.component';
import { PortfolioCtaBoxComponent } from './portfolio/portfolio-cta-box/portfolio-cta-box.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserComponent } from './user/user/user.component';
import { CookieService } from 'ngx-cookie-service';
import { CategoryFormComponent } from './budget/category-form/category-form.component';
import { BudgetComponent } from './budget/budget/budget.component';
import { LabelFormComponent } from './budget/label-form/label-form.component';
import { AboutComponent } from './about/about/about.component';
import { PlaygroundComponent } from './playground/playground.component';
import { BudgetMonthlyReportComponent } from './budget/budget-monthly-report/budget-monthly-report.component';
import { TargetEditFormComponent } from './budget/target-edit-form/target-edit-form.component';
import { BudgetTransactionsReportComponent } from './budget/budget-transactions-report/budget-transactions-report.component';
import { TransactionLiComponent } from './budget/transaction-li/transaction-li.component';
import { LabelLiComponent } from './budget/label-li/label-li.component';
import { DiscgolfHomeComponent } from './discgolf/discgolf-home/discgolf-home.component';
import { DiscgolfRoundAddComponent } from './discgolf/discgolf-round-add/discgolf-round-add.component';
import { DiscgolfRoundComponent } from './discgolf/discgolf-round/discgolf-round.component';
import { DiscgolfDotsComponent } from './discgolf/discgolf-dots/discgolf-dots.component';
import { CourseEditorComponent } from './discgolf/course-editor/course-editor.component';
import { CourseComponent } from './discgolf/course/course.component';
import { HoleComponent } from './discgolf/hole/hole.component';
import { ScorecardCourseColComponent } from './discgolf/scorecard-course-col/scorecard-course-col.component';
import { ScorecardPlayerColComponent } from './discgolf/scorecard-player-col/scorecard-player-col.component';
import { PlayerHoleComponent } from './discgolf/player-hole/player-hole.component';
import { ContactComponent } from './contact/contact.component';
import { DiscgolfNavComponent } from './discgolf/discgolf-nav/discgolf-nav.component';
import { PokerEventHomeComponent } from './poker-event/poker-event-home/poker-event-home.component';
import { RedditAdComponent } from './swgoh/reddit-ad/reddit-ad.component';
import { BounceInComponent } from './playground/mess-around/bounce-in/bounce-in.component';

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
    UserCreateComponent,
    UserLoginComponent,
    UserComponent,
    CategoryFormComponent,
    BudgetComponent,
    LabelFormComponent,
    AboutComponent,
    PlaygroundComponent,
    BudgetMonthlyReportComponent,
    TargetEditFormComponent,
    BudgetTransactionsReportComponent,
    TransactionLiComponent,
    LabelLiComponent,
    DiscgolfHomeComponent,
    DiscgolfRoundAddComponent,
    DiscgolfRoundComponent,
    DiscgolfDotsComponent,
    CourseEditorComponent,
    CourseComponent,
    HoleComponent,
    ScorecardCourseColComponent,
    ScorecardPlayerColComponent,
    PlayerHoleComponent,
    ContactComponent,
    DiscgolfNavComponent,
    PokerEventHomeComponent,
    RedditAdComponent,
    BounceInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
