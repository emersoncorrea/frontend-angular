import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefautLoginLayoutComponent } from './defaut-login-layout.component';

describe('DefautLoginLayoutComponent', () => {
  let component: DefautLoginLayoutComponent;
  let fixture: ComponentFixture<DefautLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefautLoginLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefautLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
