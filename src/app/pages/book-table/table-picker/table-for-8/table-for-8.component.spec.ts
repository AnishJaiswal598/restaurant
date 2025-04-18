import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFor8Component } from './table-for-8.component';

describe('TableFor8Component', () => {
  let component: TableFor8Component;
  let fixture: ComponentFixture<TableFor8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFor8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFor8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
