import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationComponent } from './citation.component';

describe('CitationComponent', () => {
  let component: CitationComponent;
  let fixture: ComponentFixture<CitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
