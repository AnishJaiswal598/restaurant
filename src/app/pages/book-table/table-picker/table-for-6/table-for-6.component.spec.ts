import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFor6Component } from './table-for-6.component';

describe('TableFor6Component', () => {
  let component: TableFor6Component;
  let fixture: ComponentFixture<TableFor6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFor6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFor6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
