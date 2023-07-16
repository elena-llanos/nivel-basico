import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForThomannComponent } from './ng-for-thomann.component';

describe('NgForThomannComponent', () => {
  let component: NgForThomannComponent;
  let fixture: ComponentFixture<NgForThomannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForThomannComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForThomannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
