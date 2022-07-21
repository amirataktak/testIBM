import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGridComponent } from './the-grid.component';

describe('TheGridComponent', () => {
  let component: TheGridComponent;
  let fixture: ComponentFixture<TheGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
