import { Component, Input } from '@angular/core';

import { SelectedCells } from '../../../../models/selected-cells.model';

const ONE = 1;

@Component({
  selector: 'app-grid-info-box',
  templateUrl: './grid-info-box.component.html',
  styleUrls: ['./grid-info-box.component.scss']
})
export class GridInfoBoxComponent {
  @Input() public coordinates: SelectedCells[] | null = [];

  protected readonly ONE = ONE;
}
