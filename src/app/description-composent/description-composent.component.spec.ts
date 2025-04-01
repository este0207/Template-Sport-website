import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionComposentComponent } from './description-composent.component';

describe('DescriptionComposentComponent', () => {
  let component: DescriptionComposentComponent;
  let fixture: ComponentFixture<DescriptionComposentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionComposentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionComposentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
