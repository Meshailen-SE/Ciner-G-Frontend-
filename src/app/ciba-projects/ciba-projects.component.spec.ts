import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibaProjectsComponent } from './ciba-projects.component';

describe('CibaProjectsComponent', () => {
  let component: CibaProjectsComponent;
  let fixture: ComponentFixture<CibaProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CibaProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CibaProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
