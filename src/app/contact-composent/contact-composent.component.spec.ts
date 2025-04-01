import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComposentComponent } from './contact-composent.component';

describe('ContactComposentComponent', () => {
  let component: ContactComposentComponent;
  let fixture: ComponentFixture<ContactComposentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComposentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComposentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
