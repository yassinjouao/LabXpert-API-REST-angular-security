import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent as createCUser } from './userlab/create/create.component';
import { IndexComponent as indexCUser } from './userlab/index/index.component';
import { UpdateComponent as updateCUser } from './userlab/update/update.component';
import { CreateComponent as createCPatient } from './patient/create/create.component';
import { IndexComponent as indexCPatient } from './patient/index/index.component';
import { UpdateComponent as updateCPatient } from './patient/update/update.component';
import { CreatesampleComponent as createCsample } from './sample/createsample/createsample.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BackdropComponent } from './backdrop/backdrop.component';
import { IndexComponent as indexCAnalysis } from './analysis/index/index.component';
import { ShowresultComponent } from './analysis/showresult/showresult.component';
import { UpdateresultComponent } from './analysis/updateresult/updateresult.component';
import { UpdateComponent } from './fournisseur/update/update.component';
import { IndexComponent } from './reagent/index/index.component';
import { CreateComponent } from './reagent/create/create.component';
import { CreateComponent as CreateCFournisseur } from './fournisseur/create/create.component';
import { IndexComponent as IndexCFournisseur } from './fournisseur/index/index.component';
import { UpdateComponent as UpdateCFournisseur } from './fournisseur/update/update.component';
import { CreateComponent as createCanalysis } from './analysis/create/create.component';

import { CreateComponent as CreateCReagent } from './reagent/create/create.component';
import { IndexComponent as IndexCReagent } from './reagent/index/index.component';
import { UpdateComponent as UpdateCReagent } from './reagent/update/update.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    createCUser,
    indexCUser,
    updateCUser,
    createCPatient,
    indexCPatient,
    updateCPatient,
    DashboardComponent,
    BackdropComponent,
    createCsample,
    indexCAnalysis,
    ShowresultComponent,
    UpdateresultComponent,
    UpdateComponent,
    IndexComponent,
    CreateComponent,
    CreateCFournisseur,
    IndexCFournisseur,
    UpdateCFournisseur,
    CreateCReagent,
    IndexCReagent,
    UpdateCReagent,
    createCanalysis,
    LoginComponent,
    AdminTemplateComponent,
    NotAuthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
