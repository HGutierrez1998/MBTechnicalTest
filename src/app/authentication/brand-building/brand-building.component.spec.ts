import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandBuildingComponent } from './brand-building.component';

describe('BrandBuildingComponent', () => {
  let component: BrandBuildingComponent;
  let fixture: ComponentFixture<BrandBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandBuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
