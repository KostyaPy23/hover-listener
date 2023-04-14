import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

import { Preset } from '../../models/preset.model';
import { SelectedCells } from '../../models/selected-cells.model';
import { PresetsService } from '../services/presets.service';
import { GridOutput } from '../../models/grid-output.model';
import { createGrid } from './helpers/create-grid';

const EMPTY_ARRAY: any = [];

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
  public presets: Preset[] = EMPTY_ARRAY;
  public grid$ = new BehaviorSubject<number[][]>(EMPTY_ARRAY)
  public coordinates$ = new BehaviorSubject<SelectedCells[]>(EMPTY_ARRAY)
  public isHttpError$ = new BehaviorSubject<boolean>(false);
  public selectedCells: SelectedCells[] = EMPTY_ARRAY;

  private readonly destroy$: Subject<void> = new Subject();

  constructor(
    private presetsService: PresetsService,
  ) {}

  public ngOnInit(): void {
    this.presetsService.getPresets()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.presets = res;
          },
          error: () => {
            this.isHttpError$.next(true);
          },
        }
      );
  }


  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onStart(field: number): void {
    this.grid$.next(createGrid(field));
    this.selectedCells = [];
    this.coordinates$.next([]);
  }

  public onCellEnter(gridOutput: GridOutput): void {
    const [row, col] = gridOutput.cellCoordinates;
    let newGrid: number[][] = [...gridOutput.grid];

    if (gridOutput.cellValue === 0) {
      this.updateGridWithValue(newGrid, 1, gridOutput.cellCoordinates);

      this.selectedCells.push({row, col});
      this.coordinates$.next(this.selectedCells);
    } else {
      this.updateGridWithValue(newGrid, 0, gridOutput.cellCoordinates);

      const hoveredCellIndex = this.selectedCells.findIndex(item => {
        return item.row === row && item.col === col;
      });

      this.selectedCells.splice(hoveredCellIndex, 1);
      this.coordinates$.next(this.selectedCells);
    }
  }

  private updateGridWithValue(
    grid: number[][],
    value: number,
    cellCoordinates: number[]
  ): void {
    const [row, col] = cellCoordinates;

    grid[row][col] = value;
    this.grid$.next(grid);
  }
}
