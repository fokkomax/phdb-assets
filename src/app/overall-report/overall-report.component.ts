import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { fadeAnimation2 } from '../route-animations';

@Component({
  selector: 'app-overall-report',
  templateUrl: './overall-report.component.html',
  styleUrls: ['./overall-report.component.scss'],
  animations: [fadeAnimation2],
  providers: [MessageService, ConfirmationService]
})
export class OverallReportComponent {

  products = [
    {
      hcode:'11111',
      hname:'รพ.สต. ทดสอบ',
      type:'ที่ดินบริจาค',
      status:'รอคืนที่',
      problem:'ไม่ยอมคืนที่',
      note:'ไม่ม่'
    }
  ];

}
