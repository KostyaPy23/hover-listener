import { Component, EventEmitter, Input, Output } from '@angular/core';

import { COLOR_BLUE, COLOR_WHITE } from '../../../../constants/colors';
import { GridOutput } from '../../../../models/grid-output.model';

@Component({
  selector: 'app-grid-cells',
  templateUrl: './grid-cells.component.html',
  styleUrls: ['./grid-cells.component.scss']
})
export class GridCellsComponent {
  @Input() public grid: number[][] = [];

  @Output() public readonly cellOnEnter = new EventEmitter<GridOutput>()

  protected readonly COLOR_BLUE = COLOR_BLUE;
  protected readonly COLOR_WHITE = COLOR_WHITE;

  public onMouseEnter(row: number, col: number): void {
    this.cellOnEnter.emit({
      cellCoordinates: [row, col],
      cellValue: this.grid[row][col],
      grid: this.grid,
    });
  }

  public trackByFn(id: number, el: number): number {
    return id;
  }
}
