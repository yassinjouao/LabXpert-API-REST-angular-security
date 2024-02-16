import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent as createCUser } from './userlab/create/create.component';
import { IndexComponent as indexCUser } from './userlab/index/index.component';
import { UpdateComponent as updateCUser } from './userlab/update/update.component';
import { CreateComponent as createCPatient } from './patient/create/create.component';
import { IndexComponent as indexCPatient } from './patient/index/index.component';
import { UpdateComponent as updateCPatient } from './patient/update/update.component';
import { CreatesampleComponent as CreateCsample } from './sample/createsample/createsample.component';
import { IndexComponent as indexCAnalysis } from './analysis/index/index.component';
import { ShowresultComponent } from './analysis/showresult/showresult.component';
import { UpdateresultComponent } from './analysis/updateresult/updateresult.component';

import { CreateComponent as CreateCFournisseur } from './fournisseur/create/create.component';
import { IndexComponent as IndexCFournisseur } from './fournisseur/index/index.component';
import { UpdateComponent as UpdateCFournisseur } from './fournisseur/update/update.component';

import { CreateComponent as CreateCReagent } from './reagent/create/create.component';
import { IndexComponent as IndexCReagent } from './reagent/index/index.component';
import { UpdateComponent as UpdateCReagent } from './reagent/update/update.component';
import { CreateComponent as createCanalysis } from './analysis/create/create.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminTemplateComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'userlab/index',
        component: indexCUser,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN'] },
      },
      {
        path: 'userlab/create',
        component: createCUser,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN'] },
      },
      {
        path: 'userlab/update/:id',
        component: updateCUser,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN'] },
      },
      {
        path: 'patient/index',
        component: indexCPatient,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_TECHNICIAN'] },
      },
      {
        path: 'patient/create',
        component: createCPatient,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_TECHNICIAN'] },
      },
      {
        path: 'patient/update/:id',
        component: updateCPatient,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_TECHNICIAN'] },
      },
      {
        path: 'sample/create',
        component: CreateCsample,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_TECHNICIAN'] },
      },
      {
        path: 'analysis/index',
        component: indexCAnalysis,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_TECHNICIAN'] },
      },
      {
        path: 'analysis/result/:id',
        component: ShowresultComponent,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_TECHNICIAN'] },
      },
      {
        path: 'analysis/update/:id',
        component: UpdateresultComponent,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_TECHNICIAN'] },
      },
      {
        path: 'analysis/create',
        component: createCanalysis,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_TECHNICIAN'] },
      },
      //fournisseur:
      {
        path: 'fournisseur/index',
        component: IndexCFournisseur,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_MANAGER'] },
      },
      {
        path: 'fournisseur/create',
        component: CreateCFournisseur,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_MANAGER'] },
      },
      {
        path: 'fournisseur/update/:id',
        component: UpdateCFournisseur,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_MANAGER'] },
      },
      //reagent:
      {
        path: 'reagent/index',
        component: IndexCReagent,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_MANAGER'] },
      },
      {
        path: 'reagent/create',
        component: CreateCReagent,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_MANAGER'] },
      },
      {
        path: 'reagent/update/:id',
        component: UpdateCReagent,
        canActivate: [AuthorizationGuard],
        data: { roles: ['ROLE_ADMIN', 'ROLE_MANAGER'] },
      },
      {
        path: 'notAuthorized',
        component: NotAuthorizedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
