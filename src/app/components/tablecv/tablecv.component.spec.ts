import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecvComponent } from './tablecv.component';

describe('TablecvComponent', () => {
  let component: TablecvComponent;
  let fixture: ComponentFixture<TablecvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablecvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
