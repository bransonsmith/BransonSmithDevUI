import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { BudgetComponent } from './budget/budget/budget.component';
import { ContactComponent } from './contact/contact.component';
import { CourseEditorComponent } from './discgolf/course-editor/course-editor.component';
import { CourseComponent } from './discgolf/course/course.component';
import { DiscgolfHomeComponent } from './discgolf/discgolf-home/discgolf-home.component';
import { DiscgolfRoundAddComponent } from './discgolf/discgolf-round-add/discgolf-round-add.component';
import { DiscgolfRoundComponent } from './discgolf/discgolf-round/discgolf-round.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PokerEventHomeComponent } from './poker-event/poker-event-home/poker-event-home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'user', component: UserComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'misc', component: PlaygroundComponent },
  { path: 'discgolf', component: DiscgolfHomeComponent },
  { path: 'discgolf/rounds', component: DiscgolfRoundAddComponent },
  { path: 'discgolf/courses', component: CourseEditorComponent },
  { path: 'discgolf/courses/:id', component: CourseComponent },
  { path: 'discgolf', component: DiscgolfHomeComponent },
  { path: 'cash', component: PokerEventHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
