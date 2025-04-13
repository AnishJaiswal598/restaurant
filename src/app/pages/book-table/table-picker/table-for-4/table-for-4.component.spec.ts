import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFor4Component } from './table-for-4.component';

describe('TableFor4Component', () => {
  let component: TableFor4Component;
  let fixture: ComponentFixture<TableFor4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFor4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFor4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
