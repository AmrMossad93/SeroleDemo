import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaptchaPage } from './captcha.page';

describe('CaptchaPage', () => {
  let component: CaptchaPage;
  let fixture: ComponentFixture<CaptchaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaptchaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
