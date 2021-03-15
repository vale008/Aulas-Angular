import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMeGeneratorComponent } from './read-me-generator.component';

describe('ReadMeGeneratorComponent', () => {
  let component: ReadMeGeneratorComponent;
  let fixture: ComponentFixture<ReadMeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMeGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
