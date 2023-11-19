import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];
    userDetail: any;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        private loginService: LoginService,
        private route: Router
    ) { 
        this.loginService.decodeToken().then(result => this.userDetail = result);
    }

    async ngOnInit(): Promise<void> {
        console.log(this.userDetail)
    }

    onLogout() {
        this.loginService.logout();
        this.route.navigate(['login']);
    }
}
