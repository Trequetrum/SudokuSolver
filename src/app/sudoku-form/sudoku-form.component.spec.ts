import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuFormComponent } from './sudoku-form.component';

describe('SudokuFormComponent', () => {
  let component: SudokuFormComponent;
  let fixture: ComponentFixture<SudokuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
