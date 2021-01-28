import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterrorComponent } from './testerror.component';

describe('TesterrorComponent', () => {
  let component: TesterrorComponent;
  let fixture: ComponentFixture<TesterrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
