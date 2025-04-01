import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSocialsComponent } from './nav-socials.component';

describe('NavSocialsComponent', () => {
  let component: NavSocialsComponent;
  let fixture: ComponentFixture<NavSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSocialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
