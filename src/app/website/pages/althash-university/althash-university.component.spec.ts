import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlthashUniversityComponent } from './althash-university.component';

describe('AlthashUniversityComponent', () => {
  let component: AlthashUniversityComponent;
  let fixture: ComponentFixture<AlthashUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlthashUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlthashUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
