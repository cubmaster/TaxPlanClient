import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastEditorComponent } from './forecast-editor.component';

describe('ForecastEditorComponent', () => {
  let component: ForecastEditorComponent;
  let fixture: ComponentFixture<ForecastEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
