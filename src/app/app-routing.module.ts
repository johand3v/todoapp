import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateSessionGuard } from '@core/guards/validate-session.guard';

const routes: Routes = [
  {
    path:'auth', //TODO:PUBLIC
    loadChildren: () => import("@modules/auth/auth.module").then((m) => m.AuthModule)
  },
  {
    path:'task', //TODO : Private
    loadChildren: () => import("@modules/task/task.module").then((m) => m.TaskModule),
    canActivate:[ValidateSessionGuard]
  }

  // {
  //   path:'',
  //   component:HomeComponent,
  //   children:[
  //       {
  //         path:'one',
  //         component:HomeChild1Component
  //       }
  //       ,
  //       {
  //         path:'two',
  //         component:HomeChild2Component
  //       }

  //   ]
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
