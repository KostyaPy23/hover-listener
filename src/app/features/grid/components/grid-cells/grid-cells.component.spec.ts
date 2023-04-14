import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCellsComponent } from './grid-cells.component';

describe('GridCellsComponent', () => {
  let component: GridCellsComponent;
  let fixture: ComponentFixture<GridCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCellsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('trackByFn() should return passed in index', () => {
    const element = 1;
    const trackValue = component.trackByFn(1, element);
    expect(trackValue).toBe(element);
  });
});
