import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInfoBoxComponent } from './grid-info-box.component';

describe('GridInfoBoxComponent', () => {
  let component: GridInfoBoxComponent;
  let fixture: ComponentFixture<GridInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridInfoBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
