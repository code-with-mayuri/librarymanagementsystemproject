import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffformComponent } from './staffform.component';

describe('StaffformComponent', () => {
  let component: StaffformComponent;
  let fixture: ComponentFixture<StaffformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
