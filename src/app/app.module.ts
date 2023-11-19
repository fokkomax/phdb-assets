import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { AppConfig } from '../environments/environment';
import { AutoFocusModule } from 'primeng/autofocus';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, MainComponent, LoginComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordModule,
        AutoFocusModule,
        ToastModule,
        ButtonModule,
        InputTextModule
    ],
    providers: [
        { provide: 'API_URL', useValue: AppConfig.apiUrl },
        { provide: 'APPNAME', useValue: AppConfig.appName },
        { provide: 'VERSION', useValue: AppConfig.version },
        { provide: 'SUBVERSION', useValue: AppConfig.subVersion },
        { provide: 'WURL', useValue: AppConfig.whiteUrl },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
