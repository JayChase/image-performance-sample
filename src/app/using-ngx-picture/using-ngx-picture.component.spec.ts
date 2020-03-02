import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingNgxPictureComponent } from './using-ngx-picture.component';

describe('UsingNgxPictureComponent', () => {
  let component: UsingNgxPictureComponent;
  let fixture: ComponentFixture<UsingNgxPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingNgxPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingNgxPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
