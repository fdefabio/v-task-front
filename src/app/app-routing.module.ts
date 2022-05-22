import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HistoryComponent } from './components/history/history.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [

  {
    path: 'page/index',
    component: IndexComponent,
  },

  { 
    path: 'page/login',
    component: LoginComponent,
  },

  {
    path:'page/history',
    component: HistoryComponent,
  },

  {
    path:'page/register',
    component: RegisterComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
