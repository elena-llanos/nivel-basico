import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrellasLikesComponent } from './estrellas-likes.component';

describe('EstrellasLikesComponent', () => {
  let component: EstrellasLikesComponent;
  let fixture: ComponentFixture<EstrellasLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrellasLikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstrellasLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
