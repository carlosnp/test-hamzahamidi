import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-schema',
  templateUrl: './base-schema.component.html',
  styleUrls: ['./base-schema.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseSchemaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
