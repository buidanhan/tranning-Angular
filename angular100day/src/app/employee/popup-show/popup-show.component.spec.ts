import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupShowComponent } from './popup-show.component';

describe('PopupShowComponent', () => {
  let component: PopupShowComponent;
  let fixture: ComponentFixture<PopupShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
