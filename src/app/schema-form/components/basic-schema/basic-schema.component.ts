import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-schema',
  templateUrl: './basic-schema.component.html',
  styleUrls: ['./basic-schema.component.scss']
})
export class BasicSchemaComponent implements OnInit {
  jsonSchema={
    "type": "object",
    "properties": {
      "surname":     { "type": "string" },
      "firstname":   { "type": "string" },
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Registro de eventos
   * @param event \
   */
  eventRegister(event: any){
    console.log('Evento', event)
  }
}
