import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShoppingCarComponent } from './user-shopping-car.component';

describe('UserShoppingCarComponent', () => {
  let component: UserShoppingCarComponent;
  let fixture: ComponentFixture<UserShoppingCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserShoppingCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserShoppingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
