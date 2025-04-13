import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFor2Component } from './table-for-2.component';

describe('TableFor2Component', () => {
  let component: TableFor2Component;
  let fixture: ComponentFixture<TableFor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFor2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
