import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EducationComponent} from './education/education.component';
import {PersonalComponent} from './personal/personal.component';
import {MoreComponent} from './more/more.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'education', component: EducationComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'more', component: MoreComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
