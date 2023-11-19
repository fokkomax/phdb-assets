import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { fadeAnimation2 } from '../route-animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [fadeAnimation2],
  providers: [MessageService, ConfirmationService]
})
export class MainComponent {

  products = [{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    orders: [
      {
        id: '1000-0',
        productCode: 'f230fh0g3',
        date: '2020-09-13',
        amount: 65,
        quantity: 1,
        customer: 'David James',
        status: 'PENDING'
      },
      {
        id: '1000-1',
        productCode: 'f230fh0g3',
        date: '2020-05-14',
        amount: 130,
        quantity: 2,
        customer: 'Leon Rodrigues',
        status: 'DELIVERED'
      },
      {
        id: '1000-2',
        productCode: 'f230fh0g3',
        date: '2019-01-04',
        amount: 65,
        quantity: 1,
        customer: 'Juan Alejandro',
        status: 'RETURNED'
      },
      {
        id: '1000-3',
        productCode: 'f230fh0g3',
        date: '2020-09-13',
        amount: 195,
        quantity: 3,
        customer: 'Claire Morrow',
        status: 'CANCELLED'
      }
    ]
  },
  {
    id: '1001',
    code: 'nvklal433',
    name: 'Black Watch',
    description: 'Product Description',
    image: 'black-watch.jpg',
    price: 72,
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'INSTOCK',
    rating: 4,
    orders: [
      {
        id: '1001-0',
        productCode: 'nvklal433',
        date: '2020-05-14',
        amount: 72,
        quantity: 1,
        customer: 'Maisha Jefferson',
        status: 'DELIVERED'
      },
      {
        id: '1001-1',
        productCode: 'nvklal433',
        date: '2020-02-28',
        amount: 144,
        quantity: 2,
        customer: 'Octavia Murillo',
        status: 'PENDING'
      }
    ]
  }
  ];

  assets = [
    {
      type: 'ที่ราชพัสดุ',
      type_value: 50,
      zone: [
        {
          zone_id: 1,
          zone_value: 30,
          pv: [
            {
              pv_name: 'เชียงใหม่',
              pv_value: 25
            }
          ]
        },
        {
          zone_id: 2,
          zone_value: 30,
          pv: [
            {
              pv_name: 'พะเยา',
              pv_value: 25
            }
          ]
        },
        {
          zone_id: 3,
          zone_value: 30,
          pv: [
            {
              pv_name: 'หนองคาย',
              pv_value: 25
            }
          ]
        }
      ]
    },
    {
      type: 'ที่ดินของรัฐ หรือ ที่ดินสาธารณะ',
      type_value: 120
    },
    {
      type: 'ที่ดินบริจาค',
      type_value: 44
    }
  ];
}
