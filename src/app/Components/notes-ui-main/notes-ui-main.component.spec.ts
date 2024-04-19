import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesUiMainComponent } from './notes-ui-main.component';

describe('NotesUiMainComponent', () => {
  let component: NotesUiMainComponent;
  let fixture: ComponentFixture<NotesUiMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesUiMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotesUiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
