import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserStateComponent } from './new-user-state.component';

describe('NewUserStateComponent', () => {
  let component: NewUserStateComponent;
  let fixture: ComponentFixture<NewUserStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
