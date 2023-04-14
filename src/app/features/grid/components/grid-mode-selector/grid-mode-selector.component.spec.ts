import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridModeSelectorComponent } from './grid-mode-selector.component';

describe('GridModeSelectorComponent', () => {
  let component: GridModeSelectorComponent;
  let fixture: ComponentFixture<GridModeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridModeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridModeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
