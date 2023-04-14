import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Preset } from '../../../../models/preset.model';

@Component({
  selector: 'app-grid-mode-selector',
  templateUrl: './grid-mode-selector.component.html',
  styleUrls: ['./grid-mode-selector.component.scss']
})
export class GridModeSelectorComponent {
  @Input() public presets: Preset[] | undefined = [];

  @Output() public readonly started = new EventEmitter<number>();

  public selectedPreset: number | undefined;

  public start(): void {
    if (this.selectedPreset) {
      this.started.emit(this.selectedPreset);
    }
  }
}
