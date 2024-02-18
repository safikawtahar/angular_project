import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModalContentComponent } from './ng-modal-content.component';

describe('NgModalContentComponent', () => {
  let component: NgModalContentComponent;
  let fixture: ComponentFixture<NgModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgModalContentComponent]
    });
    fixture = TestBed.createComponent(NgModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
