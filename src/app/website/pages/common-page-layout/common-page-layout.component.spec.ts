import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPageLayoutComponent } from './common-page-layout.component';

describe('CommonPageLayoutComponent', () => {
  let component: CommonPageLayoutComponent;
  let fixture: ComponentFixture<CommonPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonPageLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
