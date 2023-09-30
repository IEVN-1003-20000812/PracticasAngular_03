import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineploisComponent } from './cineplois.component';

describe('CineploisComponent', () => {
  let component: CineploisComponent;
  let fixture: ComponentFixture<CineploisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CineploisComponent]
    });
    fixture = TestBed.createComponent(CineploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
