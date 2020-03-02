import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadImageComponent } from './bad-image.component';

describe('BadImageComponent', () => {
  let component: BadImageComponent;
  let fixture: ComponentFixture<BadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
