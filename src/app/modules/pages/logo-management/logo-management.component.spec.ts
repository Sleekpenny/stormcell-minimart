import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoManagementComponent } from './logo-management.component';

describe('LogoManagementComponent', () => {
  let component: LogoManagementComponent;
  let fixture: ComponentFixture<LogoManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
