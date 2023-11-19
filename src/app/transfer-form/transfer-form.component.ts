import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { fadeAnimation2 } from '../route-animations';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss'],
  animations: [fadeAnimation2],
  providers: [MessageService, ConfirmationService]
})
export class TransferFormComponent {

  type = [
    { name: 'ที่ราชพัสดุ', code: 'NY' },
    { name: 'ที่ดินของรัฐ หรือ ที่ดินสาธารณะ', code: 'RM' },
    { name: 'ที่ดินบริจาค', code: 'LDN' },
    { name: 'ที่ป่าสงวน', code: 'IST' },
    { name: 'ที่ธรณีสงฆ', code: 'PRS' }
  ]

  status = [
    { name: 'กำลังโอน', code: 'NY' },
    { name: 'ติดปัญหา', code: 'RM' }
  ]

}
