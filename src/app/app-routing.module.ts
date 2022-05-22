import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HistoryComponent } from './components/history/history.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [

  {
    path: 'index',
    component: IndexComponent,
  },

  { 
    path: 'login',
    component: LoginComponent,
  },

  {
    path:'history',
    component: HistoryComponent,
  },

  {
    path:'register',
    component: RegisterComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
