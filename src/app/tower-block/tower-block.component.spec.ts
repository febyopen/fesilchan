import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerBlockComponent } from './tower-block.component';

describe('TowerBlockComponent', () => {
  let component: TowerBlockComponent;
  let fixture: ComponentFixture<TowerBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowerBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
