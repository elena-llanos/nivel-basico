import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorazonComponent } from './corazon.component';

describe('CorazonComponent', () => {
  let component: CorazonComponent;
  let fixture: ComponentFixture<CorazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorazonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
