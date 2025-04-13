import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFor12Component } from './table-for-12.component';

describe('TableFor12Component', () => {
  let component: TableFor12Component;
  let fixture: ComponentFixture<TableFor12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFor12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFor12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
