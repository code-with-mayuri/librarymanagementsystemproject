import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuebooklistComponent } from './issuebooklist.component';

describe('IssuebooklistComponent', () => {
  let component: IssuebooklistComponent;
  let fixture: ComponentFixture<IssuebooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuebooklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuebooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
