import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RoleGuard } from './guard/role.guard';
import { OverallReportComponent } from './overall-report/overall-report.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: 'main', component: MainComponent, canActivate: [RoleGuard] },
      { path: 'overall-report', component: OverallReportComponent, canActivate: [RoleGuard] },
      { path: 'transfer-form', component: TransferFormComponent, canActivate: [RoleGuard] },
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
