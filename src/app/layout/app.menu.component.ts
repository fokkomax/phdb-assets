import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'หน้าหลัก', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'สสจ.',
                items: [
                    { label: 'รายงานภาพรวม', icon: 'pi pi-fw pi-id-card', routerLink: ['/overall-report'] },
                ]
            },
            {
                label: 'รพ.สต.',
                items: [
                    { label: 'บัญชีแนบท้ายส่งมอบการถ่ายโอน', icon: 'pi pi-fw pi-id-card', routerLink: ['/transfer-form'] },
                ]
            }
        ];
    }
}
