import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeChild1Component } from './home-child1/home-child1.component';
import { HomeChild2Component } from './home-child2/home-child2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path:'auth', //
  //   loadChildren: () => import("@modules/auth/auth.module").then((m) => m.AuthModule)
  // },
  // {
  //   path:'task', //
  //   loadChildren: () => import("@modules/task/task.module").then((m) => m.TaskModule)
  // }

  {
    path:'',
    component:HomeComponent,
    children:[
        {
          path:'one',
          component:HomeChild1Component
        }
        ,
        {
          path:'two',
          component:HomeChild2Component
        }

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
