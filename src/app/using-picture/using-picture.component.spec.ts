import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingPictureComponent } from './using-picture.component';

describe('UsingPictureComponent', () => {
  let component: UsingPictureComponent;
  let fixture: ComponentFixture<UsingPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
