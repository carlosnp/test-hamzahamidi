import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-data-only-mode',
  templateUrl: './basic-data-only-mode.component.html',
  styleUrls: ['./basic-data-only-mode.component.scss']
})
export class BasicDataOnlyModeComponent {
  exampleJsonObject = {
    "first_name": "Jane",
    "last_name": "Doe",
    "age": 25,
    "is_company": false,
    "address": {
      "street_1": "123 Main St.",
      "street_2": null,
      "city": "Las Vegas",
      "state": "NV",
      "zip_code": "89123"
    },
    "phone_numbers": [
      {
        "number": "702-123-4567",
        "type": "cell"
      },
      {
        "number": "702-987-6543",
        "type": "work"
      }
    ],
    "test_fields":[
      {
        "decimal": "0",
        "type_number": "decimal"
      }
    ],
    "notes": "",
  };
  constructor() { }
}
