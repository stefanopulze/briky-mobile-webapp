import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenceCellComponent } from './expence-cell.component';

describe('ExpenceCellComponent', () => {
  let component: ExpenceCellComponent;
  let fixture: ComponentFixture<ExpenceCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenceCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenceCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
