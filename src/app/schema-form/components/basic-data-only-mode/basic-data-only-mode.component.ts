import { Component, OnInit } from '@angular/core';
import { JsonObject } from './data';

@Component({
  selector: 'app-basic-data-only-mode',
  templateUrl: './basic-data-only-mode.component.html',
  styleUrls: ['./basic-data-only-mode.component.scss']
})
export class BasicDataOnlyModeComponent {
  /**
   * Objeto Json
   */
  exampleJsonObject = JsonObject;
  /**
   * Constructor del documento
   */
  constructor() { }
}
