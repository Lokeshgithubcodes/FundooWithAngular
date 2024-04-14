import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardContainerComponent } from './dash-board-container.component';

describe('DashBoardContainerComponent', () => {
  let component: DashBoardContainerComponent;
  let fixture: ComponentFixture<DashBoardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashBoardContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashBoardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
